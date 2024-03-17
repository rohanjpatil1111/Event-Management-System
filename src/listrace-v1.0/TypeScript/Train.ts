class Train{

    trainNm:string;
    trainNo:number;
    startPoint:string;
    endPoint:string;

    constructor(
        trainNm:string="khandesh Express",
        trainNo:number=1425,
        startPoint:string="Bhusaval",
        endPoint:string="Surat"
    )   
        {
            this.trainNm = trainNm
            this.trainNo = trainNo
            this.startPoint = startPoint
            this.endPoint = endPoint
        }

    display(){
         
        console.log(this.trainNm);
        console.log(this.trainNo);
        console.log(this.startPoint);
        console.log(this.endPoint);
    }
}
let tr:Train = new Train();
tr.display()

let tr1:Train = new Train("kolhapur Exp",5343,"nagpur","kolhapur");
tr1.display() 