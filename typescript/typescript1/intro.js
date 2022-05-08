function selam(isim) {
    return "merhaba" + isim;
}
var mesaj = selam("merhaba");
console.log(mesaj);
var sayi = 6;
sayi = 10;
sayi = 10.5;
var yazi = "adana";
yazi = "aa";
var dogru = false;
dogru = true;
var array = [1, 2, 3,];
var array2 = [1, 2, 3];
var a = [2, "ee"];
var Renk;
(function (Renk) {
    Renk[Renk["kirmizi"] = 1] = "kirmizi";
    Renk[Renk["yesil"] = 2] = "yesil";
    Renk[Renk["goy"] = 3] = "goy";
})(Renk || (Renk = {}));
;
var reng = Renk.kirmizi;
