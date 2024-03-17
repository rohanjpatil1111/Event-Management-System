class Book{
    
    bookNm:string;
    authorNm:string;
    price:number;
    title:string;

    constructor(
        bookNm:string="KandaKochi",
        authorNm:string="Rohan",
        price:number=400,
        title:string="jalgavkeranchi gosht"
        ){
            this.bookNm = bookNm;
            this.authorNm = authorNm;
            this.price = price;
            this.title = title; 
    }
    display(){
        console.log(this.bookNm);
        console.log(this.authorNm);
        console.log(this.price);
        console.log(this.title);
    }
    discount(num:number){
        let discountPrice:number = this.price - num;
        console.log("Discount Price ="+discountPrice); 
    }
}

let bk:Book = new Book();
bk.display();
bk.discount(20);

let bk1:Book = new Book("lipika","tagor",500,"lipka title");
bk1.display();
bk1.discount(30);

