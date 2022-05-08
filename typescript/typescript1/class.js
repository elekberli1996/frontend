var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odasayisi, kat, penceresati) {
        this.odasayisi = odasayisi;
        this.kat = kat;
        this.penceresayi = penceresati;
    }
    Ev.prototype.yemek = function () {
        console.log(this.kat + "katda yemek yeyildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemek();
//inheritance miras alma extend
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.kaydet = function () {
        console.log("kisi kaydetildi");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisyap = function () {
        console.log("satis yapildi");
    };
    Object.defineProperty(Musteri.prototype, "isim", {
        get: function () {
            return "sayin  " + this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: false,
        configurable: true
    });
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.mass = function () {
        console.log("maas odendi");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
var personel = new Personel();
musteri.kaydet();
musteri.satisyap();
personel.kaydet();
personel.mass();
//private
//public..
//protected
//gettter setter
musteri.isim = "emin";
console.log(musteri.isim);
