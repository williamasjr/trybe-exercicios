//EXERCICIO-1

const a = 2;
const b = 4;
// Adição
let adicao = a + b;
console.log(adicao);
// Subtração
let subtracao = a - b;
console.log(subtracao);
//Multiplicação
let multiplicacao = a * b;
console.log(multiplicacao);
//Divisão
let divisao = a / b;
console.log(divisao);
//Módulo
let modulo = a % b;
console.log(modulo);

//EXERCICIO-2

const return1 = 5;
const return2 = 7;
if (return1 > return2) {
    console.log("retunr1 é maior que return2");
}
else {
    console.log("return2 é maior que retun1");
}

//EXERCICIO-3

let cat = 1;
let dog = 7;
let snake = 12;
if (cat > dog && cat > snake) {
    console.log("cat é o maior de todos");
}
else if (dog > cat && dog > snake) {
    console.log("dog é o maior de todos");
}
else {
    console.log ("snake é o maior de todos");
}

// EXERCICIO-4

const count = -3;
if (count > 0 ) {
    console.log("Positivo");
}
else if (count < 0) {
    console.log("Negativo");
}
else {
    console.log("Zero");
}

//EXERCICIO-5

const ladoA = 65;
const ladoB = 45;
const ladoC = -12;
let somaDosLados = ladoA + ladoB + ladoC;

let angulosComValorPositivo = ladoA > 0 && ladoB > 0 && ladoC > 0;

if(angulosComValorPositivo) {
   if (somaDosLados === 180) { console.log("True");
   }
else {
    console.log("False");
} 
} else {
    console.log("erro: ângulo inválido");
}

//EXERCICIO-6

let pecaDeXadrez = "REI"

switch (pecaDeXadrez.toLowerCase())   {
    case "rei": console.log(" ->em qualquer direção, uma casa por vez");

        break;
    case "rainha": console.log("-> em qualquer direção, quantas casas quiser");
        break;
    case "torre": console.log("-> em linha reta na vertical e na horizontl, quantas casas quiser");
        break
    case "bispo": console.log("-> na diagonal, em uantas casas quiser");
        break;
    case "cavalo": console.log("salta sobre as outras peças em forma de L");
        break;
    case "peão": console.log("-> uma casa para frente em qualquer direção, exceto no 1 movimento");
        break;
    default: console.log("Peça inválida");

}    

//EXERCICIO-7

let nota = -12;

if (nota < 0 || nota > 100) {
    console.log("Nota Inválida");
}   else if (nota >= 90) {
    console.log("A");
}   else if (nota >= 80) {
    console.log("B");
}   else if (nota >= 70) {
    console.log("C");
}   else if (nota >= 60) {
    console.log("D");
}   else if (nota >= 50) {
    console.log("E");
}   else {
    console.log("F");
}

//EXERCICIO-8

const num1 = 13;
const num2 = 17;
const num3 = 45;

let numPar = false;
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    numPar = true;
};
console.log(numPar);

//EXERCICIO-9

const opc1 = 40;
const opc2 = 20;
const opc3 = 9;

let numImpar = false;
if (opc1 % 2 === 0 || opc2 % 2 === 0 || opc3 % 2 === 0) {
    numImpar = true;
};
console.log(numImpar);

//EXERCICIO-10 

const custOfProduct = 3;
const valueForSale = 12; 

if (custOfProduct >= 0 && valueForSale >= 0){

const valueOfTotalCust = custOfProduct * 1.2; 
const totaL = (valueForSale - valueOfTotalCust) * 1000;
    console.log(totaL);
} else {
    console.log("error, os valores não podem ser negativos");

}

//EXERCICIO-11
let valorinss;
let valorIr;

const salarioBruto = 3000;
    if (salarioBruto <= 1556.94) {
        valorinss = salarioBruto * 0.08;
}   else if (salarioBruto <= 2594.82) {
    valorinss = salarioBruto * 0.09;
}   else if (salarioBruto <= 5189.82) {
    valorinss = salarioBruto * 0.11;
}   else {
    valorinss = 570.88;
};

let baseSalario = salarioBruto - valorinss; 
    if (baseSalario <= 1903.98) {
        valorIr = 0;
}   if (baseSalario <= 2826.65) {
    valorIr = (baseSalario * 0.075) - 142.80;
}   if (baseSalario <= 3751.05) {
    valorIr = (baseSalario * 0.15) - 354.80;
}   if (baseSalario <= 4664.68) {
    valorIr = (baseSalario * 0.225) - 636.13;
}   else { 
    valorIr = (baseSalario * 0.275) - 869.36;
};

console.log("Salário Líquido: " + (baseSalario - valorIr));

