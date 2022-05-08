// butun deyerler verilmelidir...
function save(product) {
    console.log(product.id + "kaydedildi");
}
save({ id: 1, namee: "pamidor", qiymet: 55 });
var Sernisinler = /** @class */ (function () {
    function Sernisinler() {
    }
    Sernisinler.prototype.save = function () {
        throw new Error("Method not implemented.");
    };
    Sernisinler.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    Sernisinler.prototype["delete"] = function () {
        throw new Error("Method not implemented.");
    };
    return Sernisinler;
}());
