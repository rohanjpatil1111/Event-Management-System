import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetails } from '../entity/myBooking';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor(private http: HttpClient, private router: Router) { }

  backendUrl: string = "http://localhost:5050/BookingDetails";
  email: string | null = sessionStorage.getItem("UserEmail");
  
  // *********************************
  city1: string = "Margao, Goa";
  place1: string = "The White House Venue";
  price1: number = 50000;
  bkd1: BookingDetails = new BookingDetails(this.city1, this.place1, this.price1, this.email ?? "geuest");

  addBooking1() {
    console.log("In method 1");
    this.http.post(this.backendUrl, this.bkd1).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // ***********************************
  city2: string = "Varca, Goa";
  place2: string = "Sterling Varca";
  price2: number = 20000;
  bkd2: BookingDetails = new BookingDetails(this.city2, this.place2, this.price2, this.email ?? "geuest");

  addBooking2() {
    console.log("In method 2");
    this.http.post(this.backendUrl, this.bkd2).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
// **********************************
  city3: string = "Betalbatim Beach, Goa";
  place3: string = "Nanu Resort";
  price3: number = 60000;
  bkd3: BookingDetails = new BookingDetails(this.city3, this.place3, this.price3, this.email ?? "geuest");

  addBooking3() {
    console.log("In method 3");
    this.http.post(this.backendUrl, this.bkd3).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city4: string = "Candoliam, Goa";
  place4: string = "Seashell Suites And Villas";
  price4: number = 60000;
  bkd4: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking4() {
    console.log("In method 4");
    this.http.post(this.backendUrl, this.bkd4).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city5: string = "Miramar Beach, Goa";
  place5: string = "Marriott Resort";
  price5: number = 60000;
  bkd5: BookingDetails = new BookingDetails(this.city5, this.place5, this.price5, this.email ?? "geuest");

  addBooking5() {
    console.log("In method 5");
    this.http.post(this.backendUrl, this.bkd5).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city6: string = "Colva, Goa";
  place6: string = "Taj Exotica Resort";
  price6: number = 60000;
  bkd6: BookingDetails = new BookingDetails(this.city6, this.place6, this.price6, this.email ?? "geuest");

  addBooking6() {
    console.log("In method 6");
    this.http.post(this.backendUrl, this.bkd6).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city7: string = "Jaipur, Rajasthan";
  place7: string = "Rambagh Palace";
  price7: number = 60000;
  bkd7: BookingDetails = new BookingDetails(this.city7, this.place7, this.price7, this.email ?? "geuest");

  addBooking7() {
    console.log("In method 7");
    this.http.post(this.backendUrl, this.bkd7).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city8: string = "Jaipur, Rajasthan";
  place8: string = "Hathi mauja";
  price8: number = 60000;
  bkd8: BookingDetails = new BookingDetails(this.city8, this.place8, this.price8, this.email ?? "geuest");

  addBooking8() {
    console.log("In method 8");
    this.http.post(this.backendUrl, this.bkd8).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city9: string = "Jaipur, Rajasthan";
  place9: string = "Rajasthali resort";
  price9: number = 60000;
  bkd9: BookingDetails = new BookingDetails(this.city9, this.place9, this.price9, this.email ?? "geuest");

  addBooking9() {
    console.log("In method 9");
    this.http.post(this.backendUrl, this.bkd9).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city10: string = "Jaipur, Rajasthan";
  place10: string = "The Raj palace";
  price10: number = 60000;
  bkd10: BookingDetails = new BookingDetails(this.city10, this.place10, this.price10, this.email ?? "geuest");

  addBooking10() {
    console.log("In method 10");
    this.http.post(this.backendUrl, this.bkd10).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city11: string = "Jaipur, Rajasthan";
  place11: string = "Brij bageecha";
  price11: number = 60000;
  bkd11: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking11() {
    console.log("In method 11");
    this.http.post(this.backendUrl, this.bkd11).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city12: string = "Jaipur, Rajasthan";
  place12: string = "The fern habitat";
  price12: number = 60000;
  bkd12: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking12() {
    console.log("In method 12");
    this.http.post(this.backendUrl, this.bkd12).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city13: string = "Udaipur, Rajasthan";
  place13: string = "Fourfox hotel";
  price13: number = 60000;
  bkd13: BookingDetails = new BookingDetails(this.city13, this.place13, this.price13, this.email ?? "geuest");

  addBooking13() {
    console.log("In method 13");
    this.http.post(this.backendUrl, this.bkd13).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city14: string = "Udaipur, Rajasthan";
  place14: string = "Shiv niwas palace";
  price14: number = 60000;
  bkd14: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking14() {
    console.log("In method 14");
    this.http.post(this.backendUrl, this.bkd14).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city15: string = "Udaipur, Rajasthan";
  place15: string = "The ananta";
  price15: number = 60000;
  bkd15: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking15() {
    console.log("In method 15");
    this.http.post(this.backendUrl, this.bkd15).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city16: string = "Udaipur, Rajasthan";
  place16: string = "Zana lake resort";
  price16: number = 60000;
  bkd16: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking16() {
    console.log("In method 16");
    this.http.post(this.backendUrl, this.bkd16).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city17: string = "Udaipur, Rajasthan";
  place17: string = "Taj lake palace";
  price17: number = 60000;
  bkd17: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking17() {
    console.log("In method 17");
    this.http.post(this.backendUrl, this.bkd17).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city18: string = "Udaipur, Rajasthan";
  place18: string = "Trident";
  price18: number = 60000;
  bkd18: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking18() {
    console.log("In method 18");
    this.http.post(this.backendUrl, this.bkd18).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city19: string = "Mumbai";
  place19: string = "JW marriot";
  price19: number = 60000;
  bkd19: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking19() {
    console.log("In method 19");
    this.http.post(this.backendUrl, this.bkd19).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city20: string = "Mumbai";
  place20: string = "The oberoi";
  price20: number = 60000;
  bkd20: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking20() {
    console.log("In method 20");
    this.http.post(this.backendUrl, this.bkd20).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city21: string = "Mumbai";
  place21: string = "Hilton";
  price21: number = 60000;
  bkd21: BookingDetails = new BookingDetails(this.city21, this.place21, this.price21, this.email ?? "geuest");

  addBooking21() {
    console.log("In method 21");
    this.http.post(this.backendUrl, this.bkd21).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city22: string = "Mumbai";
  place22: string = "Aurous banquet hall";
  price22: number = 60000;
  bkd22: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking22() {
    console.log("In method 22");
    this.http.post(this.backendUrl, this.bkd22).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city23: string = "Mumbai";
  place23: string = "Taj lands end";
  price23: number = 60000;
  bkd23: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking23() {
    console.log("In method 23");
    this.http.post(this.backendUrl, this.bkd23).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city24: string = "Mumbai";
  place24: string = "Sea princess hotel";
  price24: number = 60000;
  bkd24: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking24() {
    console.log("In method 24");
    this.http.post(this.backendUrl, this.bkd24).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city25: string = "Jodhpur, Rajasthan";
  place25: string = "Radisson hotel";
  price25: number = 60000;
  bkd25: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking25() {
    console.log("In method 25");
    this.http.post(this.backendUrl, this.bkd25).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city26: string = "Jodhpur, Rajasthan";
  place26: string = "Marugarh Resort";
  price26: number = 60000;
  bkd26: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking26() {
    console.log("In method 26");
    this.http.post(this.backendUrl, this.bkd26).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city27: string = "Jodhpur, Rajasthan";
  place27: string = "Umaid Bhawan Palace";
  price27: number = 60000;
  bkd27: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking27() {
    console.log("In method 27");
    this.http.post(this.backendUrl, this.bkd27).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city28: string = "Jodhpur, Rajasthan";
  place28: string = "Thar Oasis Resort & Camp";
  price28: number = 60000;
  bkd28: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking28() {
    console.log("In method 28");
    this.http.post(this.backendUrl, this.bkd28).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city29: string = "Jodhpur, Rajasthan";
  place29: string = "Amritam palace";
  price29: number = 60000;
  bkd29: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking29() {
    console.log("In method 29");
    this.http.post(this.backendUrl, this.bkd29).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city30: string = "Jodhpur, Rajasthan";
  place30: string = "ITC WelcomHotel";
  price30: number = 60000;
  bkd30: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking30() {
    console.log("In method 30");
    this.http.post(this.backendUrl, this.bkd30).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city31: string = "Ahmedabad, Gujarat";
  place31: string = "Neonz resort and club";
  price31: number = 60000;
  bkd31: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking31() {
    console.log("In method 31");
    this.http.post(this.backendUrl, this.bkd31).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city32: string = "Ahmedabad, Gujarat";
  place32: string = "Taj gandhinagar resort";
  price32: number = 60000;
  bkd32: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking32() {
    console.log("In method 32");
    this.http.post(this.backendUrl, this.bkd32).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city33: string = "Ahmedabad, Gujarat";
  place33: string = "Bhanu the fern resort";
  price33: number = 60000;
  bkd33: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking33() {
    console.log("In method 33");
    this.http.post(this.backendUrl, this.bkd33).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city34: string = "Ahmedabad, Gujarat";
  place34: string = "The fern seaside tent resort";
  price34: number = 60000;
  bkd34: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking34() {
    console.log("In method 34");
    this.http.post(this.backendUrl, this.bkd34).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city35: string = "Ahmedabad, Gujarat";
  place35: string = "Taj skyline";
  price35: number = 60000;
  bkd35: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking35() {
    console.log("In method 35");
    this.http.post(this.backendUrl, this.bkd35).subscribe(
      data=>{},error=>{console.log(error.value);})
  }
  // **********************************
  city36: string = "Ahmedabad, Gujarat";
  place36: string = "Hyatt regency";
  price36: number = 60000;
  bkd36: BookingDetails = new BookingDetails(this.city4, this.place4, this.price4, this.email ?? "geuest");

  addBooking36() {
    console.log("In method 36");
    this.http.post(this.backendUrl, this.bkd36).subscribe(
      data=>{},error=>{console.log(error.value);})
  }

}
