import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  TimeSlots: any = [
    {
      userId:"Abilash1",
      cinemaSeatID:"8.00"
    },
    {
      userId:"Abilash1",
      cinemaSeatID:"9.00"
    }

  ];
  total: number=0
  sport: string = environment.sport
  date: string = environment.date
  username: string = environment.user.username
  conform: boolean = false
  reject: boolean = false

  constructor(
    private rouite:ActivatedRoute,private http: HttpClient,private router: Router
  ) {

  }

  ngOnInit(): void {
    for (let i=0;i<this.TimeSlots.length;i++){
      if(this.TimeSlots[i].userId == "Abilash1"){
        this.total++
      }
    }
  }

  conformed()
  {
    this.conform = true;
  }
  rejected()
  {
    this.reject = true;
  }

}
