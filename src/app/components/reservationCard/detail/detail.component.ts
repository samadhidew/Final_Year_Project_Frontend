import {Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

import { DatePipe } from '@angular/common';
import { DateRange } from '@angular/material/datepicker';
import {delay, first} from 'rxjs/operators';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
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



  id!:number;
  sport!:any;
  week = new Array(7).fill(new Date());
  selected!: Date;



  constructor(
    private rouite:ActivatedRoute,private http: HttpClient,private router: Router
    ) {

  }

  ngOnInit(): void {
    this.rouite.params.subscribe(params=> this.id = params['id']);

    this.sportDetail(this.id)
    this.getNextWeek();
    console.log("1.user name after in detaile page", environment.user.username)
    console.log("2.timeslots before submit", environment.time.timeslots)
  }

  @ViewChild('teams') teams!: ElementRef;
  selectedTeam = '';
  onSelected():void {
    this.selectedTeam = this.teams.nativeElement.value;
    environment.date = this.teams.nativeElement.value;
    console.log(this.selectedTeam)
  }

  sportDetail(id:number){
    this.sport=this.getSportById(id,this.SportList)
  }

  getSportById(id:number,SportList:any){
      for(let i =0;i<6;i++){
          if(SportList[i].id == this.id){
            return SportList[i]
          }
    }
  }

  getNextWeek(){
    let date = new Date();
    for(let i =0;i<7;i++){
      this.week[i] = new Date(date.getFullYear(),date.getMonth(),date.getDate()+i);
    }

  }

  updateTime(): Promise<void> {
    environment.sport = this.sport.title;
    return new Promise<void>((resolve, reject) => {
      this.http.get(`http://localhost:8800/api/time/gettime/${this.id}/${this.selectedTeam}`).subscribe(
        (resultData: any) => {
          environment.time = resultData;
          environment.already = true
          console.log("3.time array if already",environment.time)
          if (resultData.length == 0) {
            environment.already = false
            let bodyData = {
              "sportCode": this.id,
              "date": this.selectedTeam,
              "timeslots": [
                {cinemaSeatID:"6.00",status:1,active:""},
                {cinemaSeatID:"7.00",status:1,active:""},
                {cinemaSeatID:"8.00",status:1,active:""},
                {cinemaSeatID:"9.00",status:1,active:""},
                {cinemaSeatID:"10.00",status:1,active:""},
                {cinemaSeatID:"11.00",status:1,active:""},
                {cinemaSeatID:"12.00",status:1,active:""},
                {cinemaSeatID:"13.00",status:1,active:""},
                {cinemaSeatID:"14.00",status:1,active:""},
                {cinemaSeatID:"15.00",status:1,active:""},
                {cinemaSeatID:"16.00",status:1,active:""},
                {cinemaSeatID:"17.00",status:1,active:""},
              ]
            };
            console.log(bodyData)
            this.http.post("http://localhost:8800/api/time/register",bodyData).subscribe(
              (resultData2: any) => {
                environment.time = resultData2;
                console.log("4.time array if already not there",environment.time)
                resolve();
              },
              (error) => {
                reject(error);
              }
            );
          } else {
            resolve();
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async submit() {
    await this.updateTime();
    await this.router.navigate(['time']);
  }







}

