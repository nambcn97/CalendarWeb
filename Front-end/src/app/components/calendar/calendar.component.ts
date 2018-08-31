import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from './../../shared/model/film';
import { CalendarEvent } from 'angular-calendar';
import { HttpClient, HttpParams } from '@angular/common/http';
import { startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek, endOfDay, format, isSameMonth, isSameDay } from 'date-fns';
import { map } from 'rxjs/operators';
import { colors } from './../../shared/utils/colors';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {

    view: string = 'month';
    viewDate: Date = new Date();
    events: Observable<Array<CalendarEvent<{ film: Film }>>>;
    activeDayIsOpen: boolean = false;

    constructor(private http: HttpClient) { }

    ngOnInit() {
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
            .set(
                'primary_release_date.gte', format(getStart(this.viewDate), 'YYYY-MM-DD')
            ).set(
                'primary_release_date.lte', format(getEnd(this.viewDate), 'YYYY-MM-DD')
            ).set(
                'api_key', '0ec33936a68018857d727958dca1424f'
            );

        this.events = this.http
            .get(apiUrl, { params })
            .pipe(
                map(
                    ({ results }: { results: Film[] }) => {
                        return results.map(
                            (film: Film) => {
                                return {
                                    title: film.title,
                                    start: new Date(film.release_date),
                                    color: colors.yellows,
                                    meta: {
                                        film
                                    }
                                };
                            }
                        );
                    }
                )
            );
    }
    dayClicked(
        { date, events }: { date: Date, events: Array<CalendarEvent<{ film: Film }>> }
    ): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventClicked(event: CalendarEvent<{ film: Film }>): void {
        window.open(
            `https://www.themoviedb.org/movie/${event.meta.film.id}`,
            '_blank'
        );
    }

}
