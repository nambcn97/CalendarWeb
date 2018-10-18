import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { CalendarEvent } from 'angular-calendar';
import { colors } from './../shared/utils/colors';
import { Event, EventModel } from '../shared/model/event';
import { AppSetting } from './../app-setting';
import { Color } from './../shared/utils/Color';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    })
};
@Injectable({ providedIn: 'root' })
export class EventService {
    private url = AppSetting.API_HOST + '/api/events';
    constructor(private http: HttpClient) {}

    getEvents(): Observable<CalendarEvent<Event>[]> {
        return this.http.get(this.url).pipe(
            map((response: EventModel) => {
                return response.data.map((event: Event, index) => {
                    return {
                        title: event.name,
                        start: new Date(event.start),
                        end: new Date(event.end),
                        color: {
                            primary: Color(event.color).hex(),
                            secondary: Color(event.color)
                                .lighten(0.8)
                                .hex()
                        },
                        meta: event
                    };
                });
            })
        );
    }

    deleteEvent(id: number): Observable<Event> {
        const eventUrl = `${this.url}/${id}`;
        return this.http.delete<Event>(eventUrl, httpOptions);
    }

    updateEvent(event: Event): Observable<Event> {
        const eventUrl = `${this.url}/${event.id}`;
        return this.http.put<Event>(eventUrl, event, httpOptions);
    }
}
