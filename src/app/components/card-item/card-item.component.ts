import { Component, OnInit, Input } from '@angular/core';
import {Event} from "../../interfaces/Event"


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() event!: Event;
  eventDate!: string;
  eventDay!: string;
  eventMonth!: string;
  eventYear!: string;
  eventDayOfWeek! : string;
  eventTime!: string;
  eventCount!: number;






  constructor() {
   }

  ngOnInit(): void {

    this.eventDate = this.event.date.split(" ")[0];

    const date : string[] = this.eventDate.split("-");
    this.eventDay = date[2];
    this.eventYear = date[0];
    this.eventTime = this.event.date.split(" ")[1];

    const dateObj = new Date(this.eventDate);
    const dayOfWeek = dateObj.toLocaleDateString("en-US", {weekday: "long"});
    const month = dateObj.toLocaleDateString("en-US", {month: "long"})

    this.eventDayOfWeek = dayOfWeek
    this.eventMonth = month;


  }

  addToBooked() {

  }

}
