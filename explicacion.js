let nombre="Brayan Fernandez";
console.log(nombre.length); //muestra la cantidad de caracteres que tiene la cadena
console.log(nombre[3]); //dr puede a acceder a alguno de los caracteres de la cadena con los corchetes, en este caso la "y"
console.log(nombre.toUpperCase()); //convierte el texto a mayuscula
console.log(nombre.split(" ")); //convierte la cadema em un arreglo
console.clear();


//-----------------------------------------------------------------------------------------------------------------------------------------------------------

let item1="item 1";
let item2="item 2";
let item3="item 3";
let item4="item 4";


let lista=`<ul>
<li>${item1}</li>
<li>${item2}</li>
<li>${item3}</li>
<li>${item4}</li>
<li>Item a</li>
</ul>`; //permite interpolar y hacer saltos de linea sin necezidad de concatenar
console.log(lista);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

let uno=1;
let dos =new Number(2);
let tres=3.5; 
console.log(dos);

let flotante=7.1542;
console.log(flotante);
console.log(flotante.toFixed(1));
console.log(tres);
console.log (typeof tres); //muestra cuel es el tipo de dato 
let nuevo =(parseFloat(tres));
console.log(nuevo*3);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//prompt("ingrese un numero"); //sirve para ingresr datos
//confirm("holaaaaa"); //sirve para hacer una pregunta con aceptar o cancelar 

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

