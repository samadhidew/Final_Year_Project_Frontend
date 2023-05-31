import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, OnInit,ChangeDetectorRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  format,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};



@Component({
  selector: 'app-calender',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calender.component.html',
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
})
export class CalenderComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;

  SportList: any = [
    { id: "1",
      title: "Swimming",
      imgUrl: "assets/images/swimming.jpg",
      desc: "Arguably the best panel of trainers are conducting " +
        "classes from beginner (Toddler), Adults(Learn to Swim) " +
        "& to professional (Squad) for any age group."},
    { id: "2",
      title: "Tennis",
      imgUrl: "assets/images/tennis.jpg",
      desc: "Arguably the best panel of trainers are conducting " +
        "classes from beginner (Toddler), Adults(Learn to Swim) " +
        "& to professional (Squad) for any age group."},

    { id: "3",
      title: "Rugby",
      imgUrl: "https://www.srilankasports.com/wp-content/uploads/2017/10/sri-lanka-sports-rugby-678x381.jpg",
      desc: "Arguably the best panel of trainers are conducting " +
        "classes from beginner (Toddler), Adults(Learn to Swim) " +
        "& to professional (Squad) for any age group."},
    { id: "4",
      title: "Hockey",
      imgUrl: "https://matalehockeyacademy.files.wordpress.com/2015/01/kaz-v-sl5.jpg",
      desc: "Arguably the best panel of trainers are conducting " +
        "classes from beginner (Toddler), Adults(Learn to Swim) " +
        "& to professional (Squad) for any age group."},
    { id: "5",
      title: "Zumba",
      imgUrl: "assets/images/Zumbat.jpg",
      desc: "Arguably the best panel of trainers are conducting " +
        "classes from beginner (Toddler), Adults(Learn to Swim) " +
        "& to professional (Squad) for any age group."},

    { id: "6",
      title: "Daycare",
      imgUrl: "assets/images/montessori.jpg",
      desc: "Arguably the best panel of trainers are conducting " +
        "classes from beginner (Toddler), Adults(Learn to Swim) " +
        "& to professional (Squad) for any age group."},
  ]

  view: CalendarView = CalendarView.Month;

  getSportTitleById(id: string): string {
    const sport = this.SportList.find((item: { id: string; }) => item.id === id);
    return sport ? sport.title : '';
  }

  parseDateString(dateString: string) {
    const day = parseInt(dateString.slice(-2));
    const monthString = dateString.slice(3, 6);

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const month = monthNames.findIndex(name => name === monthString);

    return {
      day,
      month
    };
  }

  convertToInteger(decimalString: string) {
    const floatNumber = parseFloat(decimalString);
    const integerValue = parseInt(String(floatNumber));
    return integerValue;
  }

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  newDate: Date = new Date(2023, 4, 23,2)

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();


  events: CalendarEvent[] = [

    {
      start: new Date(2023, 4, 23,2),
      end: new Date(2023, 4, 23,3),
      title: 'test',
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    }
  ];

  test: CalendarEvent[] = [
    {
      start: new Date(2023, 4, 23, 2),
      end: new Date(2023, 4, 23, 3),
      title: 'test',
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    }
  ]

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,private rouite: ActivatedRoute, private http: HttpClient, private router: Router,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.http.get("http://localhost:8800/api/time/alltime").subscribe((resultData: any) => {
      console.log(resultData);

      for(let i=0;i<resultData.length;i++){
        const { day, month } = this.parseDateString(resultData[i].date)
        for(let j=0;j<resultData[i].timeslots.length;j++) {
          if(resultData[i].timeslots[j].userId!=undefined) {
            console.log(this.convertToInteger(resultData[i].timeslots[j].cinemaSeatID))
            this.events.push({
              start: new Date(2023, month, day, this.convertToInteger(resultData[i].timeslots[j].cinemaSeatID)),
              end: new Date(2023, month, day, this.convertToInteger(resultData[i].timeslots[j].cinemaSeatID)+1),
              title: resultData[i].timeslots[j].userId + " - " + this.getSportTitleById(resultData[i].sportCode),
              actions: this.actions,
              allDay: true,
              resizable: {
                beforeStart: true,
                afterEnd: true,
              },
              draggable: true,
            })
          }
        }




      }


      console.log(this.events)

      this.cdr.detectChanges();

    });
    }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(subDays(startOfDay(new Date()), 1))
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd,
                    }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }



  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        //color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
