import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Locations } from './home-list/home-list.component';
import { Local } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(private http:HttpClient) { }
  private apiBaseUrl = 'http://localhost:3000/api';

  // Data Providers (Controllers)
  public getLocations(): Promise<Locations[]> {

    const url: string = `${this.apiBaseUrl}/locations`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Locations[])
      .catch(this.ErrHandler);
  }

  public getLocationById(locationId:String): Promise<Locations> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}`;
    return this.http
    .get(url)
    .toPromise()
    .then(response => response as Locations)
    .catch(this.ErrHandler);

  }

  public AddLocation(FormData:any):Promise<any> {
    const url: string = `${this.apiBaseUrl}/locations/`;
    return this.http
      .post(url, FormData)
      .toPromise()
      .then(response => response as any)
      .catch(this.ErrHandler);
  }
  
  private ErrHandler(err:any): Promise<any> {

    console.log('Something went wrong', err);
    return Promise.reject(err.message || err);

  } 


}
