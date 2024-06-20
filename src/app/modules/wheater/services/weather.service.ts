import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apikey = '2a4f8bc70da64e08310c9a63be4de8d3';

  constructor(private http: HttpClient) { }

 getWeatherDatas(cityName: string): Observable<any>{
  return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apikey}`,{});
 }

}
