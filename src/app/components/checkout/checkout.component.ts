import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../interfaces/Event';
import { EventsService } from 'src/app/services/events.service';
import { Store } from '@ngrx/store';
import { EventListState } from 'src/app/state/event-list.state';
import { removeEvent } from 'src/app/state/event-list.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  event$: Event | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private store: Store<{ eventList: EventListState }>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const eventId = params.get('id');
      if (eventId != null) {
        this.eventsService.getEventById(eventId).subscribe(
          event => {
            this.event$ = event;
          },
          error => {
            console.log(error, "Error occurred while getting the event.");
            this.backToHomePage();
          }
        );
      }
    });
  }

  backToHomePage() {
    this.router.navigate(['/']);
  }

  remove(): void {
    if (this.event$ != undefined) {
      this.store.dispatch(removeEvent({ event: this.event$ }));
      this.backToHomePage();
    }
  }
}
