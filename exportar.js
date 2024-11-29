export const esPrimo=(numero)=>{
    let primo=true;
    for(let n=2;n<=numero/2;n++){
        if(numero%n===0){
            primo=false;
        }
    }
    return primo;
}

export const llenado = (a)=>a;
