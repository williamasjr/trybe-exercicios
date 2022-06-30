
//parte 2
//1
let titleElement = document.querySelector('h1');
titleElement.className = 'title';
//2
let h3Elements = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1){
    h3Elements[index].className = 'description';
}
//3
let sectionContent = document.getElementsByClassName('left-content')[0];
mainElement.removeChild(sectionContent);
//4
let sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight="auto";
//5
let backGround = document.getElementsByClassName('center-content')[0];
body.parentNode.style.backgroundColor = 'green';
//6
let removeUl = document.getElementsByTagName('ul')[0];
removeUl.lastChild.remove();
removeUl.lastChild.remove();

