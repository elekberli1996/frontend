function deger1(sayi) {
    return sayi;
}
var sayi1 = deger1(3);
var sehir1 = deger1("ankara");
//generic siniflar
var deger3 = /** @class */ (function () {
    function deger3() {
    }
    deger3.prototype.calis = function (deger5) {
        console.log(deger5);
    };
    return deger3;
}());
