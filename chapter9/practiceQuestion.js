let input = document.createElement('input');
let h1 = document.createElement('h1');
let p1 = document.createElement('p');
p1.innerHTML = "Apna College <b> Delta </b> Practice";
h1.innerText = "DOM practice";
h1.style.color = "purple";
h1.innerHTML = '<u> DOM practice </u>';
input.placeholder = "password";
input.type = "password";
let btn = document.createElement('button');
btn.innerText = "click me";
btn.id = "buttonHai";
// btn = document.querySelector('#buttonHai');
 btn.style.color = "white";
btn.style.backgroundColor = "blue";

let set = document.querySelector('body');
set.append(input);
set.append(btn);
set.append(h1);
set.append(p1);