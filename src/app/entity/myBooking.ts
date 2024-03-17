export class BookingDetails {
    city: string;
    place: string;
    price: number;
    email: string;

    constructor(city: string, place: string, price: number, email: string) {
        this.city = city;
        this.place = place;
        this.price = price;
        this.email = email;
    }
}