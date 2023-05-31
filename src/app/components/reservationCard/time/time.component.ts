import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit{

  // @ts-ignore
  SportTime:any;


  selectedId: any = [];
  userId = environment.user.username

  constructor(
    private rouite:ActivatedRoute,private http: HttpClient,private router: Router
  ) {

  }

  ngOnInit(): void {
    if(environment.already){
      // @ts-ignore
      this.SportTime= environment.time[0].timeslots
    }else {
      this.SportTime= environment.time.timeslots
    }

    console.log("timeslot before submit",environment.time.timeslots)
    console.log("user",environment.user)
  }

  onSelected(selectedTime:any){
      for(let i =0;i<this.SportTime.length;i++){
        if(selectedTime == this.SportTime[i].cinemaSeatID && !this.SportTime[i].userId){
          if(this.SportTime[i].active){
            this.SportTime[i].active = false;
            const index = this.selectedId.indexOf(selectedTime);
            if (index > -1) { // only splice array when item is found
              this.selectedId.splice(index, 1); // 2nd parameter means remove one item only
            }
          }else {
            this.SportTime[i].active = true;
            this.selectedId.push(selectedTime)
          }

          break;
        }
      }
  }

  onSubmitting(){
    for(let i=0;i<this.selectedId.length;i++){
      for(let j=0;j<this.SportTime.length;j++){
        if(this.selectedId[i] == this.SportTime[j].cinemaSeatID){
          this.SportTime[j].userId = this.userId;
        }
      }
    }
    console.log("sport time",this.SportTime)
    environment.time.timeslots = this.SportTime
    console.log(environment.time)
    let bodyData = {
      "timeslots":this.SportTime
    }
    console.log("***time",environment.time)
    if(environment.already){
    // @ts-ignore
    this.http.post(`http://localhost:8800/api/time/${environment.time[0]._id}/updatetime`,bodyData).subscribe((resultData: any)=>
    {
      console.log("update array",resultData)
    })}else {
      this.http.post(`http://localhost:8800/api/time/${environment.time._id}/updatetime`,bodyData).subscribe((resultData: any)=>
      {
        console.log("update array",resultData)
      })
    }

    this.router.navigate(['paymentDetails']);

  }


}
