export class Player{

    playerId:number;
    playerNm:string;
    country:string;
    numMatches:number;

    constructor(

        playerId:number=2,
        playerNm:string="Rohan",
        country:string="India",
        numMatches:number=5
    ){

        this.playerId = playerId;
        this.playerNm = playerNm;
        this.country = country;
        this.numMatches = numMatches;
    }
    display(){
        console.log(this.playerId);
        console.log(this.playerNm);
        console.log(this.country);
        console.log(this.numMatches);
    }

}