//interfaces
interface Product {
    id:number;
    namee:string;
    qiymet:number;
}
// butun deyerler verilmelidir...
function save(product:Product){
    console.log(product.id+"kaydedildi");

}

save({id:1,namee:"pamidor",qiymet:55});

//tapamlanmamis oporesyonlar barindirir

interface Operasyon{
    save();
    update();
    delete();
}


class Sernisinler implements Operasyon{
    save() {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }

}