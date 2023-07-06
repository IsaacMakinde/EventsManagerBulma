import { createAction, props } from "@ngrx/store";
import { Event } from "../interfaces/Event";

export const loadEvents = createAction('[Event List] Load Events');
export const loadEventsSuccess = createAction('[Event List] Load Events Success', props<{ events: Event[] }>());
export const loadEventsFailure = createAction('[Event List] Load Events Failure', props<{ error: string }>());

export const selectEventByID = createAction('[Event List] Select Event', props<{ eventId: string }>());
export const selectEventByIDSuccess = createAction('[Event List] Select Event Success', props<{ event: Event }>());
export const selectEventByIDFailure = createAction('[Event List] Select Event Failure', props<{ error: string }>());

// export const addEvent = createAction('[Event List] Add Event', props<{ event: Event }>());
export const removeEvent = createAction('[Event List] Remove Event', props<{ event: Event }>());
export const removeEventSuccess = createAction('[Event List] Remove Event', props<{ event: Event }>());
export const removeEventFailure = createAction('[Event List] Remove Event Failure', props<{ error: string }>());
