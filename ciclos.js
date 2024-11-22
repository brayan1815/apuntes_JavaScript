// let n=8;
// let contador=0;

// // while (contador<=n) {
// //     console.log(contador);
// //     contador++;
// // }

// do {
    
// } while (condition);

//--------------------------------------------------------------------------------------------------------------------------------------------------------

let cont_num=0;
for (let i=2; cont_num<10;i++){
    let cont=0;
    let n=1;
    while(n<=i){
        if((i%n)==0){
            cont++;
        }
        n++;
    }
    if(cont==2){
        console.log(i);
        cont_num++;      
    }
}