import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent {

  bookingArray:any=[];
  email:String | null=sessionStorage.getItem("UserEmail");
  
  constructor(private http:HttpClient, private router:Router){ 
    if(Number(sessionStorage.getItem("Guest"))!=0){
      router.navigateByUrl("MB");
      this.getBookingsByUserId();
    }
    else{
      router.navigateByUrl("L");
    }
  }
  getBookingsByUserId(){
    this.http.get("http://localhost:5050/BookingDetails/"+this.email).subscribe(
      data=>{
        this.bookingArray=data;
      },
      error=>{
        console.log(error.value);
      }
    )
  }



  delete(id:number){
    this.http.delete("http://localhost:5050/BookingDetails/"+id).subscribe(
      data=>{
        console.log("Deleted");
        this.router.navigateByUrl("MB");
        this.getBookingsByUserId();
      },
      error=>{
        console.log(error.value);
      }
    )
  }
  
}
