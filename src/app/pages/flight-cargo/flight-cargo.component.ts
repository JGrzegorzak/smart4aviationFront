import { Component, OnInit } from '@angular/core';
import {ResponseCargo} from "../../model/responseCargo";
import {FlightsService} from "../../service/flights.service";

@Component({
  selector: 'app-flight-cargo',
  templateUrl: './flight-cargo.component.html',
  styleUrls: ['./flight-cargo.component.css']
})
export class FlightCargoComponent implements OnInit {

  flightNumber: number =0;
  date: Date = new Date();

  responseCargo: ResponseCargo | undefined;


  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.flightService.getWeightsOfCargoAndBaggage(this.flightNumber,this.date).subscribe(date =>
   this.responseCargo=date);
    console.log(this.responseCargo);
  }

}
