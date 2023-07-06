import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home/events",redirectTo: "home", pathMatch: "full"},
  {path: "home", component: EventsCardComponent },
  {path: "home/events/checkout/:id", component: CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
