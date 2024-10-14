
let btns = document.querySelectorAll('button');
// let set = document.querySelector('body');
// set.append(btns);
for(btn of btns){
 
btn.addEventListener("click",sum);
btn.addEventListener("click", function (){
  alert('Thank you');

})
}

function sum(x,y) {
  x=  prompt('enter the value of x');
  y=  prompt('enter the value of y');
  x = Number(x);
  y = Number(y);
     alert(x+y);
}


