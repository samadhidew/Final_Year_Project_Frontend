import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  url1: string = "assets/images/party.jpg"
  url2: string = "assets/images/Hall1.jpg"
  url3: string = "assets/images/Hall3.jpg"
  url4: string = "assets/images/Hall4.jpg"
  url5: string = "assets/images/Hall5.jpg"
  url6: string = "assets/images/Hall6.jpg"
  url7: string = "assets/images/Hall7.jpg"
  url8: string = "assets/images/Hall8.jpeg"

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
}
