//funksyonlara giris
function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
function stringtopla(x, y) {
    return x + y;
}
console.log(topla(2, 3));
console.log(topla(3, "fss"));
console.log(topla2(4, 5));
console.log(stringtopla("salam", "emin"));
//optioanal default paramatrs
function topla3(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(topla3(5));
function topla4(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla4(7, 7));
//optional default en sonda olmalidir
//rest parametreler
function dv(ileleman) {
    var sonrakilar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sonrakilar[_i - 1] = arguments[_i];
    }
    return ileleman + " " + sonrakilar.join("  ");
}
console.log("ahmet", "emin", "salam");
