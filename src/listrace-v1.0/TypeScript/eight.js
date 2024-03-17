var mm = [2, 6, 7, 5, 8, 7, 10, 9];
var count = 0;
for (var _i = 0, mm_1 = mm; _i < mm_1.length; _i++) {
    var x = mm_1[_i];
    if (x % 2 == 0) {
        count++;
    }
}
console.log(count);
