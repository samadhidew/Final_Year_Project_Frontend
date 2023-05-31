import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckavailabilityComponent } from './components/checkavailability/checkavailability.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MembershipComponent } from './components/membership/membership.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MorenewsComponent } from './components/morenews/morenews.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopmoreComponent } from './components/shopmore/shopmore.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DetailComponent } from './components/reservationCard/detail/detail.component';
import { TimeComponent } from './components/reservationCard/time/time.component';
import {SuccessComponent} from "./components/payments/success/success.component";
import {PaymentDetailsComponent} from "./components/payments/payment-details/payment-details.component";
import {AdminloginComponent} from './components/admin/adminlogin/adminlogin.component'
import {AdminComponent} from './components/admin/admin/admin.component'
import {EventreservationComponent} from "./components/eventreservation/eventreservation.component";
import {EventsComponent} from "./components/eventreservationcard/events/events.component";
import {EventdetailsComponent} from "./components/eventreservationcard/eventdetails/eventdetails.component";
import {EventtimeComponent} from "./components/eventreservationcard/eventtime/eventtime.component";
import {AdminreservationComponent} from "./components/adminreservation/adminreservation.component";
import {MembershipregComponent} from "./components/membershipreg/membershipreg.component";
import {CalenderComponent} from "./components/calender/calender.component";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'checkavailability', component: CheckavailabilityComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'events', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'morenews', component: MorenewsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'paymentDetails', component: PaymentDetailsComponent },
  { path: 'reservation', component: ReservationComponent},
  { path: 'shop', component: ShopComponent },
  { path: 'shopmore', component: ShopmoreComponent },
  { path: 'shopcart', component: ShopcartComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'time', component: TimeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'eventreservation',component: EventreservationComponent},
  { path: 'events',component: EventsComponent},
  {path : 'eventdetails/:id',component:EventdetailsComponent},
  {path:'eventtime',component:EventtimeComponent},
  {path:'adminreservation',component:AdminreservationComponent},
  {path:'membershipreg',component:MembershipregComponent},
  {path:'calender',component:CalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
