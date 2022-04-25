import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllFlightsComponent } from './pages/all-flights/all-flights.component';
import { IATAFlightsComponent } from './pages/iata-flights/iata-flights.component';
import { FlightCargoComponent } from './pages/flight-cargo/flight-cargo.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AllFlightsComponent,
    IATAFlightsComponent,
    FlightCargoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
