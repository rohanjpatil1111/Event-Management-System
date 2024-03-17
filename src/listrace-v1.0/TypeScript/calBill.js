function calBill(arr, deleveryCharge) {
    var sum = 0;
    if (deleveryCharge == undefined) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var i = arr_1[_i];
            sum = sum + i;
        }
        console.log(sum);
    }
    else {
        for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
            var i = arr_2[_a];
            sum = sum + i;
        }
        sum = sum + deleveryCharge;
        console.log(sum);
    }
}
calBill([20, 10, 30, 50], 10);
