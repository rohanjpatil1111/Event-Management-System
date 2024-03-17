var Train = /** @class */ (function () {
    function Train(trainNm, trainNo, startPoint, endPoint) {
        if (trainNm === void 0) { trainNm = "khandesh Express"; }
        if (trainNo === void 0) { trainNo = 1425; }
        if (startPoint === void 0) { startPoint = "Bhusaval"; }
        if (endPoint === void 0) { endPoint = "Surat"; }
        this.trainNm = trainNm;
        this.trainNo = trainNo;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }
    Train.prototype.display = function () {
        console.log(this.trainNm);
        console.log(this.trainNo);
        console.log(this.startPoint);
        console.log(this.endPoint);
    };
    return Train;
}());
var tr = new Train();
tr.display();
var tr1 = new Train("kolhapur Exp", 5343, "nagpur", "kolhapur");
tr1.display();
