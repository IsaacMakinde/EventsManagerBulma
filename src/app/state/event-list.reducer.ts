import { createReducer, on } from "@ngrx/store";
import { EventListState, initialState } from "../state/event-list.state";
import { loadEventsSuccess, removeEventSuccess, selectEventByIDSuccess } from "./event-list.actions";
const _eventListReducer = createReducer(
  initialState,
  on(loadEventsSuccess, (state, { events }) => {
    return { ...state, eventList: [...events] };
  }),
  on(removeEventSuccess, (state, { event }) => {
    const updatedList = state.eventList.filter((e) => e.id !== event.id);
    return { ...state, eventList: updatedList };
  }),
  on(selectEventByIDSuccess, (state, { event }) =>{
    return {...state, selectedEvent: event}
  })

);

export function eventListReducer(state: EventListState | undefined, action: any) {
  return _eventListReducer(state, action);
}
