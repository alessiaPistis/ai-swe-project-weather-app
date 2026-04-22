import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city = '';
  weather: any;
  forecast: any[] = [];
  errorMessage: string = '';
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  search() {
    this.errorMessage = '';
    if (!this.city || this.city.trim() === '') {
      this.errorMessage = 'Inserisci una città';
      return;
    }
    this.weatherService.getWeatherByCity(this.city)
      .subscribe({
        next: (result: any) => {
          this.weather = result;
        },
        error: (err) => {
          this.weather = null; // pulizia dati vecchi
          this.errorMessage = err.message;
        }
      });
  }

  getWeatherIcon(description: string): string {
    switch (description) {
      case 'Sereno': return '☀️';
      case 'Parzialmente nuvoloso': return '⛅';
      case 'Nebbia': return '🌫';
      case 'Pioggia':
      case 'Pioggia leggera': return '🌧';
      case 'Neve': return '❄️';
      case 'Temporale': return '⛈';
      default: return '🌍';
    }
  }

}