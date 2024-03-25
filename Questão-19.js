/*
19. Como você pode verificar se um número é ímpar ou menor que 50 em 
JavaScript usando operadores lógicos?
*/

let numero = 51;

if((numero % 2 == 1) || (numero < 50)) {
    console.log("Ímpar ou menor que 50")
} else {
    console.log("Não é ímpar e é maior que 50")
}