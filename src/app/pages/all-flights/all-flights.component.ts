import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../../service/flights.service";
import {Flight} from "../../model/flight";

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {

  flights: Flight[] = new Array();

  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe(data =>{
      this.flights=data;
    })
  }



}
