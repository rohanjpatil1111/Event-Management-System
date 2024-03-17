import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, NgForm} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { LogOutComponent } from './log-out/log-out.component';
import {MatInputModule} from '@angular/material/input';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EventsComponent,
    OrganizerComponent,
    NotFoundComponent,
    MyBookingComponent,
    LogOutComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  FormsModule,
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  NgbModule
  





  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
