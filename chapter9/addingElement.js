// for creating element which are not present in the html page we use 
let addh1 = document.createElement('h1'); // it create a h1 heading
// to give the value to the h1 tag we use 
 addh1.innerText = "how are you";
// where you want to set it let that in the box class
let set = document.querySelector('.box');
set.appendChild(addh1);
addh1.append(". I am fine what about you") // it will add this text in that one 
let btn =document.createElement('button');
btn.innerText = "click me ";
addh1.append(btn);
addh1.append('this button will use to submit the data');
addh1.insertAdjacentElement('beforebegin',btn); // now this button will appear before the addh1.
addh1.insertAdjacentElement('afterend',btn); // now this button will appear after the addh1.
let press = document.createElement('input');
press.innerText = "input here";
set.appendChild(press);
let press2 = document.createElement('input');
press2.innerText = "input2 here";
set.appendChild(press2);
// // for removing the press2 first we find its parent by commond press2.parentElement; i.e div here
// let div = document.querySelector('.box');
// div.removeChild(press2);
press2.remove();