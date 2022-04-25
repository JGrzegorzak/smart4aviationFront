import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AllFlightsComponent} from "./pages/all-flights/all-flights.component";
import {FlightCargoComponent} from "./pages/flight-cargo/flight-cargo.component";
import {IATAFlightsComponent} from "./pages/iata-flights/iata-flights.component";


const  routes: Routes = [
  { path: "flights", component:AllFlightsComponent},
  { path: "baggage", component: FlightCargoComponent},
  { path: "flight", component: IATAFlightsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
