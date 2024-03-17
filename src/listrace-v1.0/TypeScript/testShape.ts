
import {Rectangle,Circle,Square,Shape } from "./Shape";

let cir:Circle =new Circle(20);
let rec:Rectangle = new Rectangle(5,6);
let squ:Square = new Square(5);

let arr:Shape[]=[cir,rec,squ];

for(let i of arr){
   i.calArea();
    console.log("*********************");
}