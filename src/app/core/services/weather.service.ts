import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';

import { WeatherResponse } from 'src/app/shared/models/weather.model';
import { WeatherResult } from 'src/app/shared/models/weather-result.model'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<WeatherResult> {

  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;

  return this.http.get<any>(geoUrl).pipe(

    switchMap(geoData => {

      if (!geoData.results || geoData.results.length === 0) {
        return throwError(() => new Error('Città non trovata'));
      }

      const location = geoData.results[0];
      const lat = location.latitude;
      const lon = location.longitude;

      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

      // 👉 prima chiamata: meteo attuale
      return this.http.get<any>(weatherUrl).pipe(

        switchMap(weatherData => {

          const current = weatherData.current_weather;

          // 👉 seconda chiamata: forecast
          return this.getForecast(lat, lon).pipe(

            map(forecastData => {

              const daily = forecastData.daily;

              const forecast = daily.time.slice(0, 5).map((date: string, index: number) => ({
                date: date,
                max: daily.temperature_2m_max[index],
                min: daily.temperature_2m_min[index],
                description: this.getWeatherDescription(daily.weathercode[index])
              }));

              return {
                city: location.name,
                temperature: current.temperature,
                description: this.getWeatherDescription(current.weathercode),
                windspeed: current.windspeed,
                forecast: forecast
              } as WeatherResult;

            })
          );
        })
      );
    }),

    catchError(error => {
      console.error('Errore API:', error);

      let message = 'Errore di rete o API';
      if(error.status === 0){
        message = 'Connessione assente';
      }

      return throwError(() => new Error(message));
    })
  );
}
  private getWeatherDescription(code: number): string {
      switch (code) {
        case 0: return 'Sereno';
        case 1:
        case 2:
        case 3: return 'Parzialmente nuvoloso';
        case 45:
        case 48: return 'Nebbia';
        case 51:
        case 53:
        case 55: return 'Pioggia leggera';
        case 61:
        case 63:
        case 65: return 'Pioggia';
        case 71:
        case 73:
        case 75: return 'Neve';
        case 95: return 'Temporale';
        default: return 'Condizioni sconosciute';
      }
    }

    getForecast(lat: number, lon: number) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

      return this.http.get<any>(url);
    }

  }


  /*getWeather(lat: number, lon: number) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    return this.http.get<WeatherResponse>(url);
  }*/

