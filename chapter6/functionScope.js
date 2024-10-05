
// let sum = 78;  // global sum can be used any where if inside fn scope sum variable not present then global one is used 
// function calcSum(a,b){
// // sum = a+b;  // function scope
// console.log(sum);
//  }
//  // calling the function is necessary to used the inside function
// calcSum(6,7);   // this will use the sum of inside

// // inside the block statement cannot be used outside

// let info ={
// name: 'Rahul',age: '20', school: 'Aims inter college',
// };
// console.log(info.school);  // here we are call object literal
// // console.log(name);  // it will print the error



let greet = 'hello';
function changeGreet(){
    let greet = 'nameste';
    console.log(greet);
    function innerGreet(){
        console.log(greet); // ye nhi print hoga because humne isko call nhi kiya
    }
}

console.log(greet);   // sabse phle ye print hoga
changeGreet(); // now we call the outer function