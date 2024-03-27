/*
24. Como você pode verificar se um número é múltiplo de 3 ou 5 em 
JavaScript usando operadores lógicos? 
*/

let numero = 3

if(numero % 3 == 0 || numero % 5 == 0) {
    console.log("Multiplo de 3 ou 5")
} else {
    console.log("Não é multiplo de 3 ou 5")
}
//        % representa o resto de uma divisão, por exemplo   2 % 3 = 2   , e   3 % 3 = 0   por ser uma conta fexada 