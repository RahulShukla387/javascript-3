// console.log('hi i am using setInterval');
// // setInterval(function , timeout);
// function mul(a,b,c){
//    console.log('your product is ' + (a*b*c)); 
// }
// setInterval (mul.bind(null,7,4,2),4000);
// console.log(id);
// // mul(7,4,2);


// same function can be printed as

console.log('hi i am using setInterval');
// setInterval(function , timeout);
function mul(a,b,c){
   console.log('your product is ' + (a*b*c)); 
}
 let id1 = setInterval (function() { mul(4,6,9)},4000);

// mul(7,4,2);
setTimeout(function(){
    clearInterval(id1);
    console.log('you have a good day');
},12000);
