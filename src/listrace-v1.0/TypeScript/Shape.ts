export abstract class Shape {

    constructor() {        
    
    }
    abstract calArea();
}
 
    export class Circle extends Shape {
        
        r:any;
        circleArea:any;

        constructor(r:any){
            super();
            this.r=r;
        }
        
        calArea() {
            this.circleArea = 2*3.14*this.r;
            console.log("Area of Circle"+this.circleArea);
        }
    }

    export class Rectangle extends Shape{

        length:number;
        width:number;

        constructor(length:number,width:number){
            super();
            this.length=length;
            this.width=width;
        }

        calArea() {
            console.log(this.length*this.width);  
    
            }
    }
  
    export class Square extends Shape{
        a:number;

        constructor(a:number){
            super();
            this.a=a;
            
        }

        calArea() {
            console.log(this.a*this.a)
        }

    }
