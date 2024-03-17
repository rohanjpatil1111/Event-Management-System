import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { LogOutComponent } from './log-out/log-out.component';



const routes: Routes = [
 
  {path:"",component:HomeComponent},
  {path:"H",component:HomeComponent},
  {path:"E",component:EventsComponent},
  {path:"O",component:OrganizerComponent}, 
  {path:"L",component:LoginComponent},
  {path:"MB", component:MyBookingComponent},
  {path:"LO", component:LogOutComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
