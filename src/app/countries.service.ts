import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from './country';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient:HttpClient) { }

  // Get data from server
  getCountries():Observable<Country []>
  {
    return this.httpClient.get<Country[]>("/api/countries",
    {responseType:"json"}
 );
  }
}


// Now subscribe to this service in the component