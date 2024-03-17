import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  var:any=sessionStorage.setItem("Guest", `${0}`);
  constructor(private http:HttpClient, private router:Router){
  }

  backendUrl:string = "http://localhost:5050/Customer";
  
  addData(custRegister:NgForm){
    this.http.post(this.backendUrl, custRegister.value).subscribe(
      data=>{
        console.log("Data added successfully.");
        this.router.navigateByUrl("H");
      },
      error=>{
        console.log(error.value);
      }
    )
  }


  custArray:any = [];
  email:string = "";
  password:string = "";

  getAccess(){
    this.http.get(this.backendUrl+"/"+this.email+"/"+this.password).subscribe(
      data=>{
        console.log("Successfully log in.");
        this.router.navigateByUrl("H");
        sessionStorage.setItem("UserEmail",this.email);
        sessionStorage.setItem("Guest", `${1}`);
      },
      error=>{
        console.log("LogOut"+error);
      }
    )
  }


}


