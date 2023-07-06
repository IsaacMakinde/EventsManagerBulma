import { Injectable } from '@angular/core';
import {Event} from "../interfaces/Event";
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class EventsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl + '/events');
  }

  getEventById(id: string): Observable<Event | undefined> {
    const url = `${this.apiUrl}/events/${id}`;
    return this.http.get<Event>(url);
  }

  deleteEvent(event: Event): Observable<any> {
    const url = `${this.apiUrl}/events/${event.id}`;
    return this.http.delete(url);
  }

}
