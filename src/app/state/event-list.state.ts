import { Event } from "../interfaces/Event";

export interface EventListState {
  [x: string]: any;
  eventList: Event[];
}

export const initialState: EventListState = {
  eventList: []
};
