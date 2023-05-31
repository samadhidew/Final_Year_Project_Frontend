import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  SportArray : any[] = [];
  currentSportID = "";
  email: string ="";
  password: string ="";
  username: string ="";
  phone: string ="";

  constructor(
    private rouite:ActivatedRoute,private http: HttpClient,private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  signup()
  {

    let bodyData = {
      "username": this.username,
      "email" : this.email,
      "phone" : this.phone,
      "password": this.password

    };
    this.http.post("http://localhost:8800/api/auth/register",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.router.navigate(['login']);
    });
  }

}
