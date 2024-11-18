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

const flecha = (a,b)=>{
    return a*b;    
}

let respuesta = flecha(4,5);

console.log(respuesta);