import { Player } from "./Player";

let pl1:Player = new Player();
let pl2:Player =  new Player(1,"Vishal","Nagaland",32);

let arry:any[]=[pl1,pl2]
for(let i of arry){
    console.log(i);
}
