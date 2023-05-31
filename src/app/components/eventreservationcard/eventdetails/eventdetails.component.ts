import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent {
  SportList: any = [
    { id: "1",
      title: "Monarch restaurent",
      imgUrl: "assets/images/party.jpg",
      desc: "B'DAYS(KIDS,TEENS & OTHER), PRIVATE PARTIES, MEETINGS, NIGHT/HANG OUTS CAN COMBINE WITH MANY INDOOR GAMES+SWIMING,KARAOKE/ POOL PALOUR ETC... AUSTASIA POOL SIDE RESTRAUNT & PUB. MENU'S FROM RS.750"},
    { id: "2",
      title: "Pool-Eatz",
      imgUrl: "assets/images/Hall1.jpg",
      desc: "B'DAYS(KIDS,TEENS & OTHER), PRIVATE PARTIES, MEETINGS, NIGHT/HANG OUTS CAN COMBINE WITH MANY INDOOR GAMES+SWIMING,KARAOKE/ POOL PALOUR ETC... AUSTASIA POOL SIDE RESTRAUNT & PUB. MENU'S FROM RS.750"},

    { id: "3",
      title: "Coffee bean cafe",
      imgUrl: "assets/images/Hall3.jpg",
      desc: "B'DAYS(KIDS,TEENS & OTHER), PRIVATE PARTIES, MEETINGS, NIGHT/HANG OUTS CAN COMBINE WITH MANY INDOOR GAMES+SWIMING,KARAOKE/ POOL PALOUR ETC... AUSTASIA POOL SIDE RESTRAUNT & PUB. MENU'S FROM RS.750"},
    { id: "4",
      title: "Marinda Hall",
      imgUrl: "assets/images/Hall4.jpg",
      desc: "B'DAYS(KIDS,TEENS & OTHER), PRIVATE PARTIES, MEETINGS, NIGHT/HANG OUTS CAN COMBINE WITH MANY INDOOR GAMES+SWIMING,KARAOKE/ POOL PALOUR ETC... AUSTASIA POOL SIDE RESTRAUNT & PUB. MENU'S FROM RS.750"},
    { id: "5",
      title: "Imperial Hall ",
      imgUrl: "assets/images/Hall5.jpg",
      desc: "B'DAYS(KIDS,TEENS & OTHER), PRIVATE PARTIES, MEETINGS, NIGHT/HANG OUTS CAN COMBINE WITH MANY INDOOR GAMES+SWIMING,KARAOKE/ POOL PALOUR ETC... AUSTASIA POOL SIDE RESTRAUNT & PUB. MENU'S FROM RS.750"},

    { id: "6",
      title: "Conference Hall",
      imgUrl: "assets/images/Hall8.jpeg",
      desc: "B'DAYS(KIDS,TEENS & OTHER), PRIVATE PARTIES, MEETINGS, NIGHT/HANG OUTS CAN COMBINE WITH MANY INDOOR GAMES+SWIMING,KARAOKE/ POOL PALOUR ETC... AUSTASIA POOL SIDE RESTRAUNT & PUB. MENU'S FROM RS.750"}
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
    await this.router.navigate(['eventtime']);
  }





}
