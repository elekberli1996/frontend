// statik metodlar

class Matematik{

    cube(x){
        console.log(x*x*x);
    }
}

const mat =new Matematik();
mat.cube(9);

class Matematik1{

     static cube(x){
        console.log(x*x*x);
    }
} // staatic hesabina obje olusturmaqa etiyac olmur
Matematik1.cube(44);

