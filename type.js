let inp = document.querySelector('input');
let h1 = document.querySelector('h1');
let form = document.querySelector('form');
form.addEventListener('input', function(event){
    event.preventDefault();
h1.innerText = inp.value;
console.log(inp.value);
   
})