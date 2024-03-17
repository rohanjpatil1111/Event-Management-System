import { Player } from "./Player";

export class Bowler extends Player{

    numWickets:number;

    constructor(playerId:number,playerNm:string,contry:string,numMatches:number,numWickets:number){
        super(playerId,playerNm,contry,numMatches);
        this.numWickets;
    }
    displayInfo(){
        super.display()
        console.log(this.numWickets);
    }

}