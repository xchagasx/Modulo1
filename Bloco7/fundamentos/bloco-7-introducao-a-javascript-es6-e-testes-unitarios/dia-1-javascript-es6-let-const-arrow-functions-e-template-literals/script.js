// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// testingScope = (escopo) => { // <= arrow function
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     console.log(`${ifScope} ótimo, fui utilizada no escopo!`);
//   } else {
//     let elseScope = "Não devo ser utilizada fora meu escopo (else)";
//     console.log(elseScope);
//   }
// } 
// testingScope(true);


// /**/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/ */



// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort(function(a, b){
//     return a - b;
// });
// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// factorial = (n) => {
//     let result = 1;
//     for(let i = 1; i <= n; i += 1){
//         // result = result * i
//         result *= i;
//     }
// }

// factorial(5);

factorial = (n) => {
    // 0! = 1, 1! = 1;
    if (n > 0 && n <= 1) {
        return 1
    } else {
        return n *(n - 1);
    }
}
console.log(factorial(3));



// const longestWord = (x) => {  // retorna 'aconteceu'
//     const result = [];
//     for (let i = 0; i < 1; i += 1) {
        
//     }
// }
// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');