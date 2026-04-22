export interface WeatherResult {
  city: string;
  temperature: number;
  description: string;
  windspeed: number;
  forecast: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  max: number;
  min: number;
  description: string;
}