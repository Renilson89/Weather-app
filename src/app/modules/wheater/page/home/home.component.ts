import { WeatherDatas } from './../../../../models/interface/WeatherDatas';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:[]
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
 initialCityName = 'Porto Velho';
 weatherDatas!: WeatherDatas;
 searchIcon = faMagnifyingGlass

 constructor(private weatherService: WeatherService){ }


 ngOnInit(): void {
   this.getWeatherDatas(this.initialCityName);
  }

getWeatherDatas(cityName: string): void{
  this.weatherService.getWeatherDatas(cityName)
  .pipe(takeUntil(this.destroy$))
  .subscribe({
    next: (response) =>{
      response && (this.weatherDatas = response);
      console.log(this.weatherDatas)
  },
  error: (error) => console.log(error),
});
}

onSubmit(): void{
  this.getWeatherDatas(this.initialCityName);
  this.initialCityName = '';
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}


}
