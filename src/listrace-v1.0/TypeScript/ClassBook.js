var Book = /** @class */ (function () {
    function Book(bookNm, authorNm, price, title) {
        if (bookNm === void 0) { bookNm = "KandaKochi"; }
        if (authorNm === void 0) { authorNm = "Rohan"; }
        if (price === void 0) { price = 400; }
        if (title === void 0) { title = "jalgavkeranchi gosht"; }
        this.bookNm = bookNm;
        this.authorNm = authorNm;
        this.price = price;
        this.title = title;
    }
    Book.prototype.display = function () {
        console.log(this.bookNm);
        console.log(this.authorNm);
        console.log(this.price);
        console.log(this.title);
    };
    Book.prototype.discount = function (num) {
        var discountPrice = this.price - num;
        console.log("Discount Price =" + discountPrice);
    };
    return Book;
}());
var bk = new Book();
bk.display();
bk.discount(20);
var bk1 = new Book("lipika", "tagor", 500, "lipka title");
bk1.display();
bk1.discount(30);
