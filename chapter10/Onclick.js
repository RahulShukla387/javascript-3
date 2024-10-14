let btn = document.querySelector('button');
btn.onclick = function(){
    console.log('Hey you are very smart');
    alert("you are Rahul right");
}
let btn2 = document.createElement('button');
btn2.innerText = "click to register";
let set = document.querySelector('body');
set.append(btn2);
btn2.onclick = helo;
function helo () {
    prompt("enter your name");
    let age = prompt("Enter your age");
    if(age >= 18){
        alert('Bhai you are adult now');
    }
    else{
        alert('you are below 18');
    }
}