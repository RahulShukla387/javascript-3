// let array = [4,7,7,3,2,8];
// let newArray = array.map((n)=>{
//     return n*n;
// });
// let result = newArray.reduce((x,y) =>{
//     return (x+y);
// })
// console.log(result/newArray.length);

// // problem3
// let name = ['rahul','ghanshyam','shyama','rinki'];
// let res = name.map((n)=>{
//    return n.toUpperCase();
// })
// console.log(res);

// problem5
function mergeObject () {let identity =['rahul','ghanshyam','shyama','rinki'];
let no = [3,4,2,4];
let jodo = [...identity,...no,'mithun',8];
console.log(jodo);
}
mergeObject();