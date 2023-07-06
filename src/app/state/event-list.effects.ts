import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { EventsService } from "../services/events.service";
import * as EventListActions from "./event-list.actions";

@Injectable()
export class EventListEffects {
  constructor(
    private actions$: Actions,
    private eventsService: EventsService
  ) {}

  loadEvents$ = createEffect(() =>
  this.actions$.pipe(
    ofType(EventListActions.loadEvents),
    switchMap(() =>
      this.eventsService.getEvents().pipe(
        map((events) => EventListActions.loadEventsSuccess({ events })),
        catchError((error: any) =>
          of(EventListActions.loadEventsFailure({ error: error.message }))
        )
      )
    )
  )
);

deleteEvent$ = createEffect(() =>
this.actions$.pipe(
  ofType(EventListActions.removeEvent),
  mergeMap((action) =>
    this.eventsService.deleteEvent(action.event).pipe(
      map(() => EventListActions.removeEventSuccess({ event: action.event })),
      catchError((error) =>
        of(EventListActions.removeEventFailure({ error: error.message }))
      )
    )
  )
)
);

selectEventByID$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventListActions.selectEventByID),
      mergeMap(({ eventId }) =>
        this.eventsService.getEventById(eventId).pipe(
          map(event => {
            if (event) {
              return EventListActions.selectEventByIDSuccess({ event });
            } else {
              throw new Error('Event not found');
            }
          }),
          catchError(error =>
            of(EventListActions.selectEventByIDFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
