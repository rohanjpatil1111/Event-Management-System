import { Player } from "./Player";

export class Batsman extends Player{
    numRun:number;

    constructor(playerId:number,playerNm:string,contry:string,numMatches:number,numRun:number){
            super(playerId,playerNm,contry,numMatches)
            this.numRun = numRun;
    }
    displayInfo(){
        super.display()
        console.log(this.numRun);
    }
}