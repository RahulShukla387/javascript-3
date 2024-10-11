let para = document.createElement('p');
para.innerText = " Hey I'm red!";
para.style.color = "red";
let x = document.querySelector('body');
x.appendChild(para);
// You can combine above two as
// document.querySelector("body").append(para);
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3";
h3.style.color = "blue";
// let we add it in body
document.querySelector('body').appendChild(h3); // either use appendChild or append
document.querySelector('body').append(h3);
let div2 = document.createElement('div');
 div2 = document.querySelector("body");
 body = document.querySelector("body");
let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
div2.append(h1);
let para2 = document.createElement('p');
para2.innerText = "ME TOO!"
div2.append(para2);
div2.style.backgroundColor = "pink";
div2.style.border = "5px black solid";