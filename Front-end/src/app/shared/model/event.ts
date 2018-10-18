import { BaseModel } from './base-model';
export interface Event {
    id: number;
    name: string;
    description: string;
    start: string;
    end: string;
    color: any;
    location: string;
    allDay: boolean;
}
export interface EventModel extends BaseModel {
    data: Event[];
}
