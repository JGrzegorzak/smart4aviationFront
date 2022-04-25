import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../../service/flights.service";
import {ResponseFlights} from "../../model/responseFlights";

@Component({
  selector: 'app-iata-flights',
  templateUrl: './iata-flights.component.html',
  styleUrls: ['./iata-flights.component.css']
})
export class IATAFlightsComponent implements OnInit {

  iataCode:string ='';
  date: Date = new Date();
  responseFlights: ResponseFlights | undefined;

  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.flightService.getFlightsOnAirport(this.iataCode,this.date).subscribe(date =>
    this.responseFlights=date);
  }
}
