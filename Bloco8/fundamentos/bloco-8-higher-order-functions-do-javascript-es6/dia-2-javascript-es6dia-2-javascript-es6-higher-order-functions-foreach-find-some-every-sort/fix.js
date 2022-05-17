// **** FOREACH ******

// const nomes = ['AYLA', 'EDILAINE', 'CHAGAS', 'FULL-FAMILY'];

// const convertLowerCase = (item, index) => {
//     nomes[index] = item.toLowerCase();
// } 
// nomes.forEach(convertLowerCase);
// console.log(nomes);
/////////////////////////////////////////////////////////////////////////////
// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   // Adicione seu código aqui
//   emailListInData.forEach(showEmailList);

// ************FIND****************

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30

//////////////////////////////////////////////////////

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0)

// console.log(findDivisibleBy3And5);


////////////////////////////////////////////////////////////////

// const listNumber = [52, 65, 8, 98, 151, 90];

// const findLocal = listNumber.find((num) => num % 3 === 0 && num % 5 === 0);

// console.log(findLocal);

//////////////////////////////////////////////////////////////////

// const listNames = ['Ayla', 'Edilaine', 'Chagas', 'Nilton', 'Luzinete', 'Alexandre', 'Erica', 'Daniel', 'Elaine'];

// const localName = listNames.find((names) => names === 'Elaine');

// console.log(localName);

//////////////////////////////////////////////////////////

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// console.log(names.length);

// // const findNameWithFiveLetters = names.find((character) => )
// // console.log(findNameWithFiveLetters());


let myString = ["campainhas"];

// A tentativa de atribuir um valor à propriedade .length
// de uma string não tem efeito observável.

myString.length = 4;
console.log(myString);
// retorna  "campanhias"
console.log(myString.length);
// retorna 10