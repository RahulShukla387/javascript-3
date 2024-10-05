let array = [3,5,3,2,100,5,3,7,88,7];
// using reduce find the largest no in the array;
// let result = array.reduce((acc,n) =>{
    // jo acc aur n mei bda hoga whi store hoga accumulator ke ander
//   if(acc>n){
//     return acc;
//   }
//   else{
//     return n;
//   }
   
// });
// console.log(result);


// by using loop
let max = 0;
for(let i = 0;i<array.length;i++){
    if(max<array[i]){
        max =array[i];
    }
}
console.log(max);