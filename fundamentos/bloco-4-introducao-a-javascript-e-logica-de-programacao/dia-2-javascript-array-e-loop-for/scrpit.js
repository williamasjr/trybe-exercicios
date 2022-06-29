let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//EXERCICIO-1

for (let alNumbers of numbers) {
    console.log(alNumbers);
}

//EXERCICIO-2

let soma = 0;
for (let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];
}
console.log(soma);

//EXERCICIO-3

let total = 0;
for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
}   
let totalNumbers = total / numbers.length;
console.log(totalNumbers);

//EXERCICIO-4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;
for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
}   
let totalNumbers = total / numbers.length;
console.log(totalNumbers);

if (totalNumbers > 20) {
    console.log("valor maior que 20")
}
else {
    console.log('valor menor ou igual a 20')
}

//EXERCICIO-5

let bigNumber = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > bigNumber) {
        bigNumber = numbers[i];
    } 
}
console.log(bigNumber);

//EXERCICIO-6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let index =0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0) {
        result += 1;
    }
}

if (result === 0) {
    console.loh("nenhum valor ímpar encontrado");
} else {
    console.log(result);
}

//EXERCICIO-7 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}
console.log(menorValor);

//EXERCICIO-8 

let numbers = [];

for (let index = 1; index <= 25; index += 1){
    numbers.push(index);
}
console.log(numbers);

//EXERCICIO-9

let numbers = ['1',  '2',  '3',  '4',  '5',  '6',  '7',  '8',
    '9', '10', '11', '12', '13', '14', '15', '16',
   '17', '18', '19', '20', '21', '22', '23', '24',
   '25'];

   for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };
