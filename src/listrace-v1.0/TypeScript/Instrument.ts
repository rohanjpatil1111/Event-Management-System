import { ITune } from "./ITune";

export class Guitar implements ITune {
    
    play() {
       console.log("Garrrr Garrrr.....");
    }
}

export class Piano implements ITune{
   
    play() {
        console.log("pipipeeepi......");
    }

}

export class Violin implements ITune{
    play() {
        
        console.log("viliviliiie....")
    }
    
}