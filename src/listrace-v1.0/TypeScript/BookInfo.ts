
function bookinfo(cod:number,title:string,author:string,price:number,discount?:number){

    if(discount==undefined){
        console.log(cod + title + author + price);
    }
    else{
        console.log(cod + title + author +(price-discount));
    }
}
bookinfo(10," KandaKochi "," Rohan ",400);
bookinfo(10," KandaKochi "," Rohan ",500,200);