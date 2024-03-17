function calBill(arr:number[],deleveryCharge?:number){
let sum:number=0;
    if(deleveryCharge==undefined){
        for(let i of arr){
            sum = sum + i;
    }
    console.log("calculate bill"+sum);
}
    else{
        for(let i of arr){
            sum = sum + i;
        }
            sum=sum +deleveryCharge;
    
    console.log("Bill with deleveerycgarge"+sum);
    }
    
}
calBill([20,10,30,50]);
calBill([20,10,30,50],10);