//1
let h1element = document.createElement('h1');
h1element.innerText = 'Exercícios 5.2 - JavaScripy DOM';
document.body.appendChild(h1element);
//2
let mainElement = document.createElement('main');
mainElement.className = 'main-content';
document.body.appendChild(mainElement);
//3
let sectionElement = document.createElement('section');
sectionElement.className = 'center-content';
document.body.appendChild(sectionElement);
//4 
let paragrafoElement = document.createElement('p');
paragrafoElement.innerText = 'Os filhos de Francisco';
sectionElement.appendChild(paragrafoElement);
//5
let sectionElement2 = document.createElement('section');
sectionElement2.className = "left-content";
mainElement.appendChild(sectionElement2);
//6
let sectionElement3 = document.createElement('section');
sectionElement3.className = 'rigth-content';
mainElement.appendChild(sectionElement3);
//7
let addImagen = document.createElement('img');
addImagen.src = 'https://picsum.photos/200';
addImagen.className = 'small-image';
sectionElement2.appendChild(addImagen);
//8
let ulList = document.createElement("ul");
sectionElement3.appendChild(ulList);
let fullNumbers = ['um, dois, três, quatro, cinco, seis, sete, oito, nove, dez'];
for (let numbers in fullNumbers) {
    let liList = document.createElement('li');
    liList.innerHTML = fullNumbers[numbers];
    ulList.appendChild(liList);
}
//9 
for(index = 1; index <= 3; index += 1) {
    let h3Element = document.createElement('h3');
    h3Element.innerHTML = 'Show ' + index;
    mainElement.appendChild(h3Element);
}






