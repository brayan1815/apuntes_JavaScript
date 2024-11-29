let palabra="1238 vaca y pollito";

let regex= /^([0-9]{2,3}).+([a-z]{4,6})$/g; //CON LA G MUESTRA TODASS LAS COINCIDENCIAS POSIBLES.
                    // CON \s MUESTRA TODOS LOS ESPACIOS EN BLANCO


console.log(regex.test(palabra)) //Muestra si la palabra se encuentra
//console.log(regex.exec(palabra))//Muestra si esta y la posicion en la que se encuentra
//console.log(palabra.match(regex)); //tambien muestra cuentas veces existe

// function buscar(regex,palabra){
//     if(palabra.includes(regex)){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(buscar(regex,palabra));