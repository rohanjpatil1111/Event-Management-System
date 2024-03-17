let mm:number[]=[2,6,7,5,8,7,10,9];
let count:number=0;
for(let x of mm){

    if(x%2==0){
        count++;
    }
    
}
console.log(count);