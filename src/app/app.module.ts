import { MbscModule } from '@mobiscroll/angular';
;
import { EventdetailsComponent } from './components/eventreservationcard/eventdetails/eventdetails.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MembershipComponent } from './components/membership/membership.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopmoreComponent } from './components/shopmore/shopmore.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MorenewsComponent } from './components/morenews/morenews.component';
import { CheckavailabilityComponent } from './components/checkavailability/checkavailability.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { SportComponent } from './components/reservationCard/sport/sport.component';
import { DetailComponent } from './components/reservationCard/detail/detail.component';
import { TimeComponent } from './components/reservationCard/time/time.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import { SuccessComponent } from './components/payments/success/success.component';
import { PaymentDetailsComponent } from './components/payments/payment-details/payment-details.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import {EventreservationComponent} from "./components/eventreservation/eventreservation.component";
import {EventsComponent} from "./components/eventreservationcard/events/events.component";
import { EventtimeComponent } from './components/eventreservationcard/eventtime/eventtime.component';
import {AdminreservationComponent} from "./components/adminreservation/adminreservation.component";
import { MembershipregComponent } from './components/membershipreg/membershipreg.component';
import { CalenderComponent } from './components/calender/calender.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


function QrCodeModule() {

}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MembershipComponent,
    AboutusComponent,
    ContactusComponent,
    ShopComponent,
    ShopmoreComponent,
    ShopcartComponent,
    GalleryComponent,
    EventsComponent,
    MorenewsComponent,
    CheckavailabilityComponent,
    ReservationComponent,
    PaymentsComponent,
    SportComponent,
    DetailComponent,
    TimeComponent,
    SuccessComponent,
    PaymentDetailsComponent,
    AdminloginComponent,
    AdminComponent,
    EventreservationComponent,
     EventsComponent,
     EventdetailsComponent,
     EventtimeComponent,
    AdminreservationComponent,
    MembershipregComponent,
    SportComponent,
    CalenderComponent,
  ],
  imports: [
    MbscModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MbscModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
