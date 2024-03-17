function bookinfo(cod, title, author, price, discount) {
    if (discount == undefined) {
        console.log(cod + title + author + price + discount);
    }
    else {
        console.log(cod + title + author + (price - discount));
    }
}
bookinfo(10, " KandaKochi ", " Rohan ", 400);
bookinfo(10, " KandaKochi ", " Rohan ", 400, 200);
