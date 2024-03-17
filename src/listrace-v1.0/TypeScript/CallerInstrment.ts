import { ITune } from "./ITune";
import { Guitar,Piano,Violin } from "./Instrument";

let Gt:Guitar = new Guitar();
let pio:Piano = new Piano();
let Vio:Violin = new Violin();

let Instrument:ITune[] = [Gt,pio,Vio];

for(let i of Instrument){
    
    i.play();
    console.log("*****************");
}