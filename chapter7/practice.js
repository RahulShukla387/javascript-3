const square = (n)=>{
console.log(n*n);
}
square(5);

// setInterval(function,time);

id1 =setInterval(function (){
    console.log('Hello world');
},2000);

// setTimeout(function,time);
setTimeout(function(){
    clearInterval(id1);
},11000);