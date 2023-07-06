import { Component, OnInit } from '@angular/core';


import { Event } from "../../interfaces/Event";
import { Store } from '@ngrx/store';
import { EventListState } from 'src/app/state/event-list.state';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss']
})
export class EventsCardComponent implements OnInit {
  events: Event[] = [];
  selectedDate: string | null = null;
  filteredEvents: Event[] = [];
  displayedEvents: Event[] = [];
  showMoreButtonDisabled = false;

  constructor(private store: Store<{ eventList: EventListState }>) {
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Event List] Load Events' });
    this.store.select('eventList').subscribe((state: EventListState) => {
      console.log(state.eventList, "right here");
      this.events = state.eventList;
      this.filteredEvents = this.events;
      this.displayedEvents = this.filteredEvents.slice(0, 4);
      this.updateShowMoreButtonDisabledState();
    });
  }

  filterEvents() {

    if (this.selectedDate !== "") {
      console.log(this.selectedDate);

      this.filteredEvents = this.events.filter(event => event.date.split(" ")[0] === this.selectedDate);
    } else {
      this.filteredEvents = this.events;
    }
    this.displayedEvents = this.filteredEvents.slice(0, 4);
    this.updateShowMoreButtonDisabledState();
  }

  showMore() {
    const currentlyDisplayedCount = this.displayedEvents.length;
    const remainingEvents = this.filteredEvents.slice(currentlyDisplayedCount, currentlyDisplayedCount + 4);
    this.displayedEvents.push(...remainingEvents);
    this.updateShowMoreButtonDisabledState();
  }

  updateShowMoreButtonDisabledState() {
    this.showMoreButtonDisabled = this.displayedEvents.length === this.filteredEvents.length;
  }
}
