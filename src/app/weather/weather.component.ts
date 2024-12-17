import {Component} from '@angular/core';
import {WeatherService} from '../weather.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ]
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {
  }

  getWeather() {
    if (!this.city.trim()) {
      this.errorMessage = 'Please enter a city name.';
      return;
    }

    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Could not retrieve weather information. Please check the city name and try again.';
        this.weatherData = null;
      }
    );
  }
}
