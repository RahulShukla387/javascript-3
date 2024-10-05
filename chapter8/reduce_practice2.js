// problem1
// let array = [40,50,3,10,6,800,90];
// let result = array.every((n)=>{
//     return n%10 == 0;
// })
// console.log(result);

// problem2
// by using loop
let array = [5,3,6,2,-1,0,1,8];
let min = array[0];
for(let i =0; i<array.length;i++){
    if(min>array[i]){
        min=array[i];
    }
}
console.log(min);

// by using reduce function

// let array = [5,3,-1,6,0,2,1,8];
// let result = array.reduce((acc,n)=>{
//     if(acc>n){
//         return n;
//     }
//     else{
//         return acc;
//     }
// })
// console.log(result);