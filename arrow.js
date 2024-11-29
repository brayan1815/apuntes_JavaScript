class Persona{
    constructor(nombreA,apellidoA,edadA){
        this.nombre=nombreA;
        this.apellido=apellidoA;
        this.edad=edadA;
    }
    //METODOS
    comer(){
        console.log(`${this.nombre} esta comiendo`)
    }
}



brayan.comer();
Estiven.comer();


class Aprendiz extends Persona{

}
const brayan=new Aprendiz("Brayan","Fernandez",17);
const Estiven=new Aprendiz("Estven","Jimenez",17);










// const brayan={
//     nombre:"Brayan",
//     Apellido:"Fernandez",
//     edad: 17
// }

// console.log(Object.keys(brayan)); //mostrara los atributos del objeto