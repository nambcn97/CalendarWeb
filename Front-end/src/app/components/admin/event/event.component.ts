import { Component, OnInit } from '@angular/core';
import { Event } from '../../../shared/model/event';
import { CalendarEvent } from 'calendar-utils';
import { subDays, startOfDay, addDays, endOfMonth, addHours, endOfDay, format } from 'date-fns';
import { colors } from './../../../shared/utils/colors';
import { Subject } from 'rxjs';
import { EventService } from './../../../services/event.service';
import { Color } from './../../../shared/utils/Color';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
    events: Event[];
    isDisable: boolean[] = [];
    refresh: Subject<any> = new Subject();

    constructor(private eventService: EventService) {}

    ngOnInit() {
        this.getEvents();
    }

    getEvents() {
        this.eventService.getEvents().subscribe(events => {
            this.events = events.map((event: CalendarEvent) => event.meta);
            this.isDisable = events.map(_ => true);
            console.log(this.isDisable);
        });
    }

    addEvent(): void {
        const newDate = new Date();
        this.events.push({
            id: 0,
            name: 'New Event',
            description: '',
            color: '#000000',
            allDay: true,
            end: newDate.toString(),
            location: '',
            start: newDate.toString()
        });
        this.isDisable.push(false);
        this.refresh.next();
    }

    updateEvent(id: number) {
        const updateEvent = this.events.filter(event => event.id === id)[0];
        const index = this.events.findIndex(event => event.id === id);
        updateEvent.start = format(updateEvent.start, 'YYYY-MM-DD HH:mm:ss');
        updateEvent.end = format(updateEvent.end, 'YYYY-MM-DD HH:mm:ss');
        this.eventService.updateEvent(updateEvent).subscribe(
            success => {
                console.log(success);
                this.isDisable[index] = true;
                this.getEvents();
                this.refresh.next();
            },
            error => console.log(error)
        );
    }

    deleteEvent(id: number) {
        this.eventService.deleteEvent(id).subscribe(success => console.log(success), error => console.log(error));
        this.events = this.events.filter(event => event.id !== id);
    }
}
