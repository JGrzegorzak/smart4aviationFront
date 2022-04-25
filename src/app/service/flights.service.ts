import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight} from "../model/flight";
import {ResponseFlights} from "../model/responseFlights";
import {ResponseCargo} from "../model/responseCargo";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getAllFlights():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.baseUrl +"/flights");
  }

  getFlightsOnAirport(iataCode: string, date: Date):Observable<ResponseFlights>{
    let params = new HttpParams()
      .set('iataCode',iataCode)
      .set('date',date.toString());
    return this.http.get<ResponseFlights>(this.baseUrl+"/flight",{params: params});
  }

  getWeightsOfCargoAndBaggage(flightNumber: number, date: Date):Observable<ResponseCargo>{
    let params = new HttpParams()
      .set('flightNumber',flightNumber)
      .set('date',date.toString());
    return this.http.get<ResponseCargo>(this.baseUrl +"/baggage",{params:params});
  }
}
