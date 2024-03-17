import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  constructor(private http: HttpClient, private router: Router) { }
  
  llogin:string|undefined;

  login(){
    console.log(this.llogin)
     this.llogin="LO";
  }
  logout(){
    this.llogin=undefined;
  }
}
