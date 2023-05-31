import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user: any

  constructor()
  {
    // @ts-ignore
    this.user = environment.user
  }
  ngOnInit(): void {
    // @ts-ignore
    this.user = environment.user
  }

}
