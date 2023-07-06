import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { eventListReducer } from './state/event-list.reducer';
import { EventListEffects } from './state/event-list.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabsComponent,
    EventsCardComponent,
    FooterComponent,
    CardItemComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({eventList: eventListReducer}),
    EffectsModule.forRoot([EventListEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
