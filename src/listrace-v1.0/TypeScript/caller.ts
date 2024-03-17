import { cube, square } from "./squareCube";

function caller(a:number){
   square(a);
}

function caller1(b:number){
    cube(b);
 }

 caller(2);
 caller1(3);
 