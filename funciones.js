// function nombre(parametro){
//     console.log(parametro);
// }

// //nombre(250);

// //-----------------------------------------------------------------------------------------------------------------------------------------------------------

// var esPrimo=function(numero){
//     let cont=0;
//     for (let n=1; n<=numero;n++){
//         if((numero%n)==0){
//             cont++;
//         }
//     }
//     if (cont>2){
//         return"el nummero no es primo";
//     }
//     else if (cont==2){
//         return"el numero es primo";
//     }
//     else{
//         return"el numero 1 no es primo y YA";
//     }
// }

// console.log(esPrimo(10));

// const anonima=function(valor){
//     console.log(valor);
// }

// let respuesta=anonima(25);
// console.log(respuesta);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// const generadora=function* nombre(){
//     yield 1;
//     yield 2;
// }

// console.log(generadora.next())

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// let parametro=25;
// (function(){
//     alert("sin llamarme")
// })()

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// const flecha = (a,b)=>{
//     return a*b;    
// }

// let respuesta = flecha(4,5);

// console.log(respuesta);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(a);

// const a=[ 1, "letras", true, false,[1,"mas_letras"]];
// a.push("Brayan"); //agregar una posicion al final del arreglo
// a.pop();//eliminar la ultima posicion al final del arreglo
// console.log(a[4][1]); //se accede a "mas_letras"

// console.log(a[0]); //se acede al primer capo del arreglo

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// const person={
//     nombre:"Brayan",
//     apellido:"Fernnadez",
//     edad:17,
//     saluda: function(){
//         return `Hola soy ${this.nombre}`
//     }
// }

//  //atributo pais 
// person.pais="Colombia"; //se le agrega un atributo al objeto afuera de este 

// person.despedir=function(){
//     return `Adios, se despide ${this.nombre}` // se agrega una funcion al objeto afuera de este
// }
// // console.log(person.saluda());
// // console.log(person.despedir());

// // console.log(Object.keys(person));

// // if(Object.keys(person).indexOf("genero"===-1)){
// //     console.log("El atributo no fue ddefinido");
// // }

// console.log(Object.keys(person).includes("pais"));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

