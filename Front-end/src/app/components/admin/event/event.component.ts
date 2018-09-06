import { Component, OnInit } from '@angular/core';
import { Event } from '../../../shared/model/events';
import { CalendarEvent } from 'calendar-utils';
import { subDays, startOfDay, addDays, endOfMonth, addHours, endOfDay } from 'date-fns';
import { colors } from './../../../shared/utils/colors';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
    events : CalendarEvent[] = [
        {
            start: subDays(startOfDay(new Date()), 1),
            end: addDays(new Date(), 1),
            title: 'Event 1',
            color: colors.red
          },
          {
            start: startOfDay(new Date()),
            title: 'Event 2',
            color: colors.yellow
          },
          {
            start: subDays(endOfMonth(new Date()), 3),
            end: addDays(endOfMonth(new Date()), 3),
            title: 'Event 3',
            color: colors.blue
          },
          {
            start: addHours(startOfDay(new Date()), 2),
            end: new Date(),
            title: 'Event 4',
            color: colors.yellow,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }
    ];

    refresh: Subject<any> = new Subject();

    constructor() { }

    ngOnInit() {
    }

    addEvent(): void {
        this.events.push({
          title: 'New event',
          start: startOfDay(new Date()),
          end: endOfDay(new Date()),
          color: colors.red,
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          }
        });
        this.refresh.next();
      }

}
