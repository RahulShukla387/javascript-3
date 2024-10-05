// let array = [1,3,2,4,5,6];
// array.forEach(function (k){  // you have to give a value k or any name to call console
//     console.log(k);
// });

// array object

let section = [{
    name:'Rahul shukla', attendance: '89%'
},{
    name:'priyanshi', attendance: '93%'
},{
    name: 'Rajat', attendance: '75%'
}]
// defining by arrow function
section.forEach((n)=>{
    console.log(n.attendance);
});