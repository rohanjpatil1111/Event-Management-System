function score(arr:number[], extrapoint?:number){
    let sum:number=0;
        if(extrapoint==undefined){
            for(let i of arr){
                sum = sum + i;
        }
        console.log("Only score"+sum);
   
    }
        else{
            for(let i of arr){
                sum = sum + i;
            }
                sum=sum +extrapoint;
        
        console.log("Score with extra point"+sum);
        }
        return sum;
    }
    score([20,10,30,50])
    score([20,10,30,50],10);