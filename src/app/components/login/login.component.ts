import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment} from "../../../environments/environment.development"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  SportArray : any[] = [];
  currentSportID = "";
  email: string ="";
  password: string ="";

  constructor(private http: HttpClient,private router: Router )
  {
  }

  ngOnInit(): void {
  }

  gotoList() {
    this.router.navigate(['/reservation']);
  }

  login()
  {
    let bodyData = {
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:8800/api/auth/login",bodyData).subscribe((resultData: any)=>
    {
      environment.user = resultData;
      console.log("user name after login", environment.user.username)
      this.gotoList()
    });
  }

}
