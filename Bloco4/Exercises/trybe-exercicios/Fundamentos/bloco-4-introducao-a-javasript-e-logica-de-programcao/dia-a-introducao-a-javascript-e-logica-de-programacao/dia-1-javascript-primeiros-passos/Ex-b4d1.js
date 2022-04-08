//const a = 3;
//const b = 2;
//
//    let adicao = a + b;
//        console.log(adicao);
//
//    let subtracao = a - b;
//    console.log(subtracao);
//
//    let multiplicao = a * b;
//        console.log(multiplicao);
//
//    let divisao = a / b;
//    console.log(divisao);
//
//
//    let modulo = a % b;
//        console.log(modulo);



// **EX 2: Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

//const a = 3;
//const b = 2;
//    if(a < b){
//        console.log("A menor que B!");
//    }else {
//        console.log("B menor que A!")
//    }



// **EX 3:Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 3;
const b = 2;
const c = 4;

    if(a > b && a > c ){
        console.log("A maior que B e C!");
    }else if(b > a && b > c){
        console.log("B maior do que A e C");
    }else if(c > a && c > b){
        console.log("C maior do que A e B")
    }
    
    else {
        console.log("Não Definido!");
    }