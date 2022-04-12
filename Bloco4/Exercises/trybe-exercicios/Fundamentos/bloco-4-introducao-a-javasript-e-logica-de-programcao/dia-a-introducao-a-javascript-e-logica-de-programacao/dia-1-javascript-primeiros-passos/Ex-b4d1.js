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

//const a = 3;
//const b = 2;
//const c = 4;
//
//    if(a > b && a > c ){
//        console.log("A maior que B e C!");
//    }else if(b > a && b > c){
//        console.log("B maior do que A e C");
//    }else if(c > a && c > b){
//        console.log("C maior do que A e B")
//    }
//    
//    else {
//        console.log("Não Definido!");
//    }


// **EX 4: Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

 //   const value = 1;  // positivo, negativo ou zero!
 //       if(value > 0){
 //           console.log("positivo");
 //       }else if(value < 0){
 //           console.log("negativo");
 //       }else{
 //           console.log("zero");
 //       }
    
// **EX 5: Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
//Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

//        const a1 = 0;
//        const a2 = 60;
//        const a3 = 60;
//        const somaA = a1 + a2 + a3;
//            if(somaA === 180){
//                    console.log(true);
//            }else if(somaA && a1 && a2 && a3){
//                    console.log("Ângulo Inválido");
//            }else{
//                console.log();
//        }

//****************************************************************


// TABUADA

 //   let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   //   for(let m = 0; m <= 9; m += 1){  
     //     console.log(num[m]);  
      //  for(let i = 0; i < m; i += 1){
      //     console.log(m * 2);
      // }
   // }


// **EX 6: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//          Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//          Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//          Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//          Exemplo: bishop (bispo) -> diagonals (diagonais)
                    
                           // EX. let word = "TeSt";
                               //console.log(word.toLocaleLowerCase());
 //               let peca = "Rainha";               
 //               let pecaXadrez = peca.toLocaleLowerCase();
//
 //                   if(pecaXadrez === "pião"){
 //                       console.log(" Movimento sempre vertical avançando uma casa ou duas casa no primeiro movimento");
 //                   }else if(pecaXadrez === "torre"){
 //                     console.log("Movimento Vertical e Horizontal, sem limite de casas.");
 //                   }else if(pecaXadrez === "cavalo"){
 //                       console.log(pecaXadrez.toLocaleLowerCase() + " -> Movimento em L.");
 //                   }else if(pecaXadrez === "bispo"){
 //                       console.log(pecaXadrez.toLocaleLowerCase() + " -> Movimento em diagonal sem limite de casas.");
 //                   }else if(pecaXadrez === "rainha"){
 //                       console.log(pecaXadrez.toLocaleLowerCase() + " -> Movimento para qualquer lado sem limite de casas, observação sem o mesmo movimento do 'Cavalo'.");
 //                   }else if(pecaXadrez === "rei"){
 //                       console.log(pecaXadrez.toLocaleLowerCase() + " -> Movimento para qualquer lado com limite de uma casa por vez.");
 //                 }else {
 //                       console.log("Erro, Peça Não Existe!");
 //                   }
//
//
//// **EX 7: Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
//
//    let porcentagem =; // insira aqui a nota!; 
//
//        if(porcentagem >= 90){
//            console.log("A");
//        }else if(porcentagem >= 80){
//            console.log("B");
//        }else if(porcentagem >= 70){
//            console.log("C");
//        }else if(porcentagem >= 60){
//            console.log("D");
//        }else if(porcentagem >= 50){
//            console.log("E");
//        }else if(porcentagem < 50){
//            console.log("F");
//        }else if(porcentagem <= 0 || porcentagem > 100){
//            console.log("Erro nota Inválida");
//        }



// **EX 8: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if .

//        const num1 = 11 ;
//        const num2 = 5 ;
//        const num3 = 7 ;
//            if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
//                console.log(true);
//            }else{
//                console.log(false);
//            }
//

// **EX 9: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
//Bonus: use somente um if .


//        const num1 = 15;
//        const num2 = 10;
//        const num3 = 8;
//            if(num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1){
//                console.log(true);
//            }else{
//                console.log(false);
//            }


// **EX 10: Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

//        const valueProd = 50;      // o custo de um produto
//        const valueVenda = 100;   // seu valor de venda
//        const impostoSobreOcusto = 20 // sobre o custo do produto, incide um imposto de 20%.
//        const custProd = ((valueProd * 20 / 100) + valueProd); // calculo de 20% sobre o produto
//        const lucroVenda = valueVenda - custProd; //O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo
//        const qtdVendas = 1000;  // Quantidade de Vendas
//        const resultVendas = custProd * qtdVendas; // Resultado das Vendas
//               if(valueProd && valueVenda > 0){            
//                console.log(resultVendas);
//               }else{
//                console.log("Valor " + valueProd + " e/ou " + valueVenda + " inferior ao permitido")
//        }    


    // **EX 11:     Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//      A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//  **  INSS (Instituto Nacional do Seguro Social)
//      Salário bruto até R$ 1.556,94: alíquota de 8%
//      Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//      Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//      Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//   **  IR (Imposto de Renda)
//      Até R$ 1.903,98: isento de imposto de renda
//      De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//      De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//      De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//      Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//      Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
//      O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//      Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//      Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//      R$ 2.670,00: salário com INSS já deduzido;
//      7.5%: alíquota de imposto de renda;
//      R$ 142,80 parcela a se deduzir do imposto.
//      Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//      O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
//      Resultado: R$ 2.612,55.
//      Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
//
//
//      const salarioBruto = 2200;
//      const inss8 = 8;          // Até 1556.94  
//      const inss9 = 9;          // 1556.95 à 2594.92    
//      const inss11 = 11;        // 2594.93 à 5189.82    
//      const inssMax = 570.88;   // Acima de 5189.82
//
//      const irIsento = 1903.98; // isento de imposto (baseado no calculo salario - inss)
//      const ir7_5 = 7.5;        // de 1903.99 à 2826.65 
//      const ir7_5p = 142.8;     // A deduzir - 142.8 
//      const ir15 = 15;          // de 2826.66 à 3751.05
//      const ir15p = 354.8;      // A deduzir - 354.80
//      const ir22_5 = 22.5;      // de 3751.06 à 4664.68
//      const ir22_5p = 636.13;   // A deduzir - 636.13
//      const ir27_5 = 27.5;      // acima de 4664.68
//      const ir27_5p = 869.36    // A deduzir - 869.36
//
//      const calcInss8 = salarioBruto - (salarioBruto * inss8 / 100); // até 1556.94
//      const calcInss9 = salarioBruto - (salarioBruto * inss9 / 100); // 1556.95 à 2594.92
//      const calcInss11 = salarioBruto - (salarioBruto * inss11 / 100); // de 2594.93 à 5189.82
//      const calcInssMax = 570.88 // acima de 5189.82
//
//      const calcIr7_5 = (calcInss9 - (calcInss9 * ir7_5 / 100)) - ir7_5p; 
//    //  const calcIr15 = ()
//
//        if(salarioBruto <= 1556.94){
//            console.log("Até R$ 1.903,98: isento de imposto de renda. Calculado INSS Valor Final: " + calcInss8 + " Reais");
//        }else if(salarioBruto >= 1556.94 && salarioBruto <= 2594.92){
//            console.log((calcInss9 - (calcInss9 * ir7_5 / 100)) - ir7_5p);
//            
//        }else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
//            console.log((calcInss11 - (calcInss11 * ir7_5 / 100)) - ir7_5p)
//        }else if(salarioBruto ){
//        
//        }else{
//            console.log("Erro");
//        }
//
//


//let car = {
//    type: 'Fiat',
//    model: '500',
//    color: 'white',
//    insight: {
//        city: 'Rj',
//        state: 'Rio de Janeiro',
//    }
//};
//
//    console.log(car.insight.city);

//let diasDaSemana = {
//    1: 'domingo',
//    2: 'segunda',
//    3: 'terça',
//    4: 'quarta',
//    5: 'quinta',
//    6: 'sexta',
//    7: 'sábado',
//    };
//    
//       console.log(diasDaSemana['2']); // SyntaxError: Unexpected number
//    console.log(diasDaSemana['1']); // domingo

//let conta = {
//    agencia: '0000',
//    banco: {
//      cod: '012',
//      id: 4,
//      nome: 'TrybeBank',
//    },
//  };
//  
//  let infoDoBanco = 'banco';
//  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//  console.log(conta[infoDoBanco]['nome']); // TrybeBank
//  
//  console.log(conta.agencia); // 0000
//  console.log(conta['agencia']); // 0000
//  
//  console.log(conta.banco.cod); // 012
//  console.log(conta['banco'].id); // 4

//let usuario = {
//    id: 99,
//    email: 'jakeperalta@gmail.com',
//    infoPessoal: {
//      nome: 'Jake',
//      sobrenome: 'Peralta',
//      endereco: {
//        rua: 'Smith Street',
//        bairro: 'Brooklyn',
//        cidade: 'Nova Iorque',
//        estado: 'Nova Iorque',
//      },
//    },
//  };
//  
//  console.log(usuario['id']); // 99
//  console.log(usuario.email); // jakeperalta@gmail.com
//  
//  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//let moradores = [
//    {
//      nome: 'Luiza',
//      sobrenome: 'Guimarães',
//      andar: 10,
//      apartamento: 1005,
//    },
//    {
//      nome: 'William',
//      sobrenome: 'Albuquerque',
//      andar: 5,
//      apartamento: 502,
//    },
//    {
//      nome: 'Murilo',
//      sobrenome: 'Ferraz',
//      andar: 8,
//      apartamento: 804,
//    },
//    {
//      nome: 'Zoey',
//      sobrenome: 'Brooks',
//      andar: 1,
//      apartamento: 101,
//    },
//  ];
//  
//  let primeiroMorador = moradores[0];
//  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//  console.log(primeiroMorador['andar']); // 10
//  
//  let ultimoMorador = moradores[moradores.length - 1];
//  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//  console.log(ultimoMorador.nome); // Zoey


//let player = { 
//        name:  'Marta',
//        lastName: 'Silva',
//        age: 34,
//        medals: { 
//            golden: 2, 
//            silver: 3 },
//        bestInTheWorld: [
//            2006, 2007, 2008, 2009, 2010, 2018
//        ]    
//    
//     };  
//         
//        console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
//        console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes ' + player.bestInTheWorld + '!');



//let cars = ['Saab', 'Volvo', 'BMW'];
//
//for (let index in cars) {
//  console.log(cars[index]);
//}

//let car = {
//    type: 'Fiat',
//    model: '500',
//    color: 'white',
//  };
//  
//  for (let index in car) {
//    console.log(index, car[index]);
//  }

//let names = {
//    person1: 'João',
//    person2: 'Maria',
//    person3: 'Jorge',
//  };
//
//    for (let p in names){
//        console.log("Olá " + names[p]);
//    }
//

//    let car = {
//        model: 'A3 Sedan',
//        manufacturer: 'Audi',
//        year: 2020
//      };
//
//      for(let i in car){
//          console.log(car, car[i]);
//      }

/*  Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: 
{ area: 0, perimetro: 0 } 
perimetro = (base *2) + (altura * 2)
area = base * altura
*/

//function calc(){
//    let quadrilatero = {
//        area: base * altura,
//        altura
//        perimetro: 5,
//    }
//        console.log(quadrilatero)
//} return calc


/* Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: 
{
 pares: 0, 
 ímpares: 0 
} 
*/

//function parImpar(numbers){
//    let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//            let cont = 0;
//            let cont2 = 0;
//                for(let i = 0; i < list.length; i += 1){
//                       if(list[i] % 2 == 0){
//                           cont += 1;
//                           return cont;
//                       }else{
//                           cont2 += 1;
//                           return cont2;
//                       }
//        }console.log(numbers);
//}


//    let aa = 2;
//    let bb = 3;
//
//function soma(num1, num2){
//    
//    let result = num1 + num2;
//    console.log(result);
//} 
//        soma(aa, bb);


//let pessoa = {
//    nome:'nomeX',
//    idade: 12,
//    endereco: 'rua X',
//};
//
//pessoa['sexo'] = 'masculino';
//pessoa['sexo'] = 'feminino';
//console.log(pessoa);


array = [1,2,3,4];

    function contaIndex(array){
        let nova = 0;
        for (let index = 0; index < array.length; index += 1){
            //nova += array[index]; //(soma)
            nova = array.length; // pega index
        }
                return nova;
    }                   console.log(contaIndex([1,2,3,4,5,56]))