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
//abstract classlar
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("kaydedildi");
    };
    return KrediBase;
}());
var TukediciKredi = /** @class */ (function (_super) {
    __extends(TukediciKredi, _super);
    function TukediciKredi() {
        return _super.call(this) || this;
    }
    TukediciKredi.prototype.hesabla = function () {
        console.log("hesabla islemi");
    };
    return TukediciKredi;
}(KrediBase));
var MorgocKredi = /** @class */ (function (_super) {
    __extends(MorgocKredi, _super);
    function MorgocKredi() {
        return _super.call(this) || this;
    }
    MorgocKredi.prototype.hesabla = function () {
        console.log("morgoc hesabla islemi");
    };
    return MorgocKredi;
}(KrediBase));
var tuketici = new TukediciKredi();
tuketici.hesabla();
tuketici.kaydet();
var morgoc = new MorgocKredi();
morgoc.hesabla();
morgoc.kaydet();
