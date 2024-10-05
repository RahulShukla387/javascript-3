let no = [4,5,2,4];
let result = no.every((n) =>{
   return n%2 ==0;
})
console.log(result);
let newNo = no.some((n) =>{
    return n%2 == 0;
})
console.log(newNo);