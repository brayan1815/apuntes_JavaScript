let num_1=1184;
// let num_2=2;

let sum1=0;
// let sum2=0;

for(let n=1;n<num_1;n++){
    if(num_1%n==0){
        sum1+=n;
    }
}

// for(let b=1;b<num_2;b++){
//     if(num_2%b==0){
//         sum2+=b;
//     }
// }

if(sum1===num_1){
    console.log("El numero es perfecto");
}else{
    console.log("El numero no es perfecto")
}


//NUMEROS PERFECTOS 
// let num=12;
// sum=0;

// for(let n=1;n<num;n++){
//     if(num%n===0){
//         sum+=n;
//     }
// }

// if(sum===num){
//     console.log("El numero es perfecto");
// }else{
//     console.log("El numero no es perfecto");
// }

let perfectos =(a)=>{
    let sum1=0;

    for(let n=1;n<a;n++){
        if(a%n==0){
            sum1+=n;
        }
    }
    
    if(sum1===a){
        return true;
    }else{
        return false;
    }
}

let per=perfectos(6);
console.log(per);