import { Component } from '@angular/core';
@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent{
 pictures = [
      'https://images.unsplash.com/photo-1551198297-e490636298ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1542742518-7ad6e6b91bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80',
      'https://images.unsplash.com/photo-1456014673271-90b7fddf2eea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1551025119-77673c1d37cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

];
   currentPicture = 0;
   

   select(index:any) {
     this.currentPicture = index;
   }

   selectArrow() {
     if (this.currentPicture < this.pictures.length - 1) {
       this.currentPicture++;
     }
   }

   selectLeftArrow() {
     if (this.currentPicture > 0) {
       this.currentPicture--;
     }
   }
}