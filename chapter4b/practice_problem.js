// problem 1
// let array = [1,2,3,4,5,6,2,3];
// let x = array.splice(1,1) // now array become[1,3,4,5,6,2,3] so index of 2 is now 5
//  x = array.splice(5,1)
// console.log(array);


// another soln of problem 1
// console.log('digit should be less than 100')
// let array = [4,5,2,3,5,3,5,3,3,2,2,5,];
// let no = 3;
// for(let i = 0; i<100;i++){
//     if(array[i] == no){
//         array.splice(i,1);
//     }
// }
// console.log(array);


// // problem4
// let n = prompt('enter the no of which you want factorial');
// let factorial = 1;
// for(let i= 1; i<=n; i++){
//   factorial =factorial*i // can write factorial *= i
// }
// console.log('the factorial of given no is  ' + factorial);


// problem5
let array = [4,6,3,9];
let largest = 0;
for(let i = 0; i<array.length;i++){
   if(largest<array[i]){
    largest = array[i];
   }
    }
    console.log('largest integer among given array is  ' + largest);