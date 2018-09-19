import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
    startOfMonth,
    startOfWeek,
    startOfDay,
    endOfMonth,
    endOfWeek,
    endOfDay,
    format,
    isSameMonth,
    isSameDay
} from 'date-fns';
import { map } from 'rxjs/operators';
import { colors } from './../../shared/utils/colors';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventService } from './../../services/event.service';
import { Event } from '../../shared/model/event';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
    view = 'month';
    viewDate: Date = new Date();
    events$: Observable<CalendarEvent<Event>[]>;
    activeDayIsOpen = false;
    locale = 'en';
    constructor(private http: HttpClient, private eventService: EventService) {}

    ngOnInit() {
        this.fetchEvents();
    }

    setView(view: string): void {
        this.view = view;
        this.fetchEvents();
    }

    fetchEvents(): void {
        const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

        const getStart: any = {
            month: startOfMonth,
            week: startOfWeek,
            day: startOfDay
        }[this.view];

        const getEnd: any = {
            month: endOfMonth,
            week: endOfWeek,
            day: endOfDay
        }[this.view];

        const params = new HttpParams()
            .set('primary_release_date.gte', format(getStart(this.viewDate), 'YYYY-MM-DD'))
            .set('primary_release_date.lte', format(getEnd(this.viewDate), 'YYYY-MM-DD'))
            .set('api_key', '0ec33936a68018857d727958dca1424f');

        // this.events = this.http.get(apiUrl, { params }).pipe(
        //     map(({ results }: { results: Film[] }) => {
        //         return results.map((film: Film) => {
        //             return {
        //                 title: film.title,
        //                 start: new Date(film.release_date),
        //                 color: colors.yellows,
        //                 meta: {
        //                     film
        //                 }
        //             };
        //         });
        //     })
        // );
        this.events$ = this.eventService.getEvents();
    }
    dayClicked({ date, events }: { date: Date; events: CalendarEvent<Event>[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventClicked(event: CalendarEvent<Event>): void {
        console.log(event);
        this.viewDate = event.start;
        this.view = 'day';
    }
}
