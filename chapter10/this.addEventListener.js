let h1 = document.querySelector('h1');
let p = document.querySelector('p');
h1.addEventListener('click',changeIt);
p.addEventListener('click',changeIt);
function changeIt(){
    console.dir(this.innerText); // in first function this will target to hq and in the second one it will target to p
    this.style.backgroundColor = 'blue';
}
