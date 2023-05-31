// import {Component, OnInit} from '@angular/core';
// import {ActivatedRoute, Router} from "@angular/router";
// import {HttpClient} from "@angular/common/http";
//
// @Component({
//   selector: 'app-payments',
//   templateUrl: './payments.component.html',
//   styleUrls: ['./payments.component.css']
// })
// export class PaymentsComponent implements OnInit {
//   ngOnInit(): void {
//   }
//
//   constructor(
//     private rouite:ActivatedRoute,private http: HttpClient,private router: Router
//   ) {
//
//   }
//
//   upload()
//   {
//
//       this.router.navigate(['success']);
//
//   }
//
// }

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
// import {image} from "../../../assets/images/1.jpg"

// import { Profile } from "../../models/Profile";
// import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  form!: FormGroup;
  // profile: Profile;
  imageData: string = "";

  readonly url = "http://localhost:8800/api/profiles";

  constructor(
    private rouite: ActivatedRoute, private http: HttpClient, private router: Router
  ) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
    });
  }

  onFileSelect(event: Event) {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    // @ts-ignore
    this.form.patchValue({image: file});
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    // this.profileService.addProfile(this.form.value.name, this.form.value.image);
    // @ts-ignore
    console.log("submit profile")
    this.form.reset();
    // this.imageData = "";
    const profileData = new FormData();
    profileData.append("file", this.form.value.image);

    let bodyData = {
      "file": this.form.value.image

    };
    this.http.post("http://localhost:8800/file/upload", profileData).subscribe((resultData: any) => {
      console.log(resultData);
    });
  }

}
