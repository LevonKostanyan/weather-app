import {Component} from '@angular/core';
import {WeatherComponent} from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    WeatherComponent
  ],
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';
}
