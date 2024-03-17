import { Player } from "./Player";
import { Batsman } from "./Batsman";
import { Bowler } from "./Bowler";

let bt1 = new Batsman (22,"Aditya","Indoneshia",5,444);
let bt2 = new Batsman (23,"Vishal","Chaina",15,565);

let bol1 = new Bowler(4,"Ram","Setu",7,15);
let bol2 = new Bowler(6,"Doller","KhopasKheda",7,12);

let play:Player[]=[bt1,bt2,bol1,bol2];
for(let i of play ){
    i.display();
    console.log("**********************");
}
