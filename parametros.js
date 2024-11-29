// function suma(a,b, ...c){
//     let suma=0;
//     for(let n=0;n<c.length;n++){    
//         if(typeof(c[n]==="number")) suma+=c[n];
//     }
//     if(typeof(a==="number")) suma+=a;
//     if(typeof(n==="number")) suma+=b;


//     return suma;

// }

// let resultado=suma("dos",9,21,5,"cuatro",8,9);
// console.log(resultado);


// --------------------------------------------------------------------------------------------------------------------------------------------------
const arrayA=[1,2,3];
const arrayB=["a","b","c"];

//const arrayC=arrayA+arrayB;

//const arrayC= arrayA.concat(arrayB);

const arrayC = [...arrayA, ...arrayB]
console.log(arrayC);