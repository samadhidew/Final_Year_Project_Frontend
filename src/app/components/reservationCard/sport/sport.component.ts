import {Component} from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {
  url1: string = "assets/images/swimming.jpg"
  url2: string = "assets/images/tennis.jpg"
  url3: string = "https://www.srilankasports.com/wp-content/uploads/2017/10/sri-lanka-sports-rugby-678x381.jpg"
  url4: string = "https://matalehockeyacademy.files.wordpress.com/2015/01/kaz-v-sl5.jpg"
  url5: string = "assets/images/Zumbat.jpg"
  url6: string = "assets/images/montessori.jpg"
  url7: string = "assets/images/party.jpg"
  url8: string = "assets/images/50244559_10156980463523838_8020065222926532608_n.jpg"

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
      desc: "We are proud to state that our coaches on racket sports (Tennis) are best ranking coaches in the country with many national & international exposure who can handle beginner to professional any age group."},

    { id: "3",
      title: "Rugby",
      imgUrl: "https://www.srilankasports.com/wp-content/uploads/2017/10/sri-lanka-sports-rugby-678x381.jpg",
      desc: "All above facilities are available for all (leisure, Professional, trainers) on long or short term basis and booking slots available 24 hours of the day 365 days of the year under any weather condition."},
    { id: "4",
      title: "Hockey",
      imgUrl: "https://matalehockeyacademy.files.wordpress.com/2015/01/kaz-v-sl5.jpg",
      desc: "All above facilities are available for all (leisure, Professional, trainers) on long or short term basis and booking slots available 24 hours of the day 365 days of the year under any weather condition."},
    { id: "5",
      title: "Zumba",
      imgUrl: "assets/images/Zumbat.jpg",
      desc: "The Zumba instructor has trained many students in Sri Lanka for the past two decades. Get fit, stay fit. Burn calories while having fun at the best exercise class ever"},

    { id: "6",
      title: "Daycare",
      imgUrl: "assets/images/montessori.jpg",
      desc: "If you want to give a good base & a start to your child Austasia Montessori is the place with the better guidence.we have well qualified and well trained teachers to guide your child."},
  ]
}
