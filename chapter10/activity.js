// let p = document.querySelector('p');
// let div = document.querySelector('#div');
// p.addEventListener('click','changeIt');
// div.addEventListener('click','changeIt');
// function changeIt (){
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// }
let h1 = document.querySelector('h1')
let rgbValue = document.querySelector('#rgb');
let select = document.querySelector('button');
let set = document.querySelector('#div1')
select.onclick = getColor;
function getColor(){
    let r = Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
  set.style.backgroundColor = color;
rgbValue.textContent = `rgb value: ${color}`; 
  return color;
}