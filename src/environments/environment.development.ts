import {CalendarEvent} from "angular-calendar";

// @ts-ignore
// @ts-ignore
export const environment = {
  user: {username:"",phoneNO:"",email:""},
  already:true,
  sport:"",
  date:"",
  time:{_id: "",
    sportCode: "",
    date: "",
    timeslots: [
      {cinemaSeatID:"6.00",status:1,active:""},
      {cinemaSeatID:"7.00",status:1,active:""},
      {cinemaSeatID:"8.00",status:1,userId:""},
      {cinemaSeatID:"9.00",status:1,active:""},
      {cinemaSeatID:"10.00",status:1,active:""},
      {cinemaSeatID:"11.00",status:1,active:""},
      {cinemaSeatID:"12.00",status:1,active:""},
      {cinemaSeatID:"13.00",status:1,active:""},
      {cinemaSeatID:"14.00",status:1,active:""},
      {cinemaSeatID:"15.00",status:1,active:""},
      {cinemaSeatID:"16.00",status:1,active:""},
      {cinemaSeatID:"17.00",status:1,active:""},
    ],},
  test:  [
    {
      start: new Date(2023, 4, 23, 2),
      end: new Date(2023, 4, 23, 3),
      title: 'test',
      actions: "",
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    }
  ]
};
