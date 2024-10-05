let marks = [4,6,3,7,3];
console.log(... marks);  // will prt all elmt of array
console.log(Math.min(... marks));
let name = 'rahul shukla';
console.log(... name);
// you can add two array using the spread property
let num1 = [8,3,4,5,2];
let num2 = [3,7,4,8];
let num = [... num1,...num2];
console.log(num);

// you can use spread in object
let intro = {
    name: 'rahul shukla',university: 'mmmut',
    degree: 'b.tech'
}
let id = {...intro, rollNo: '78677'};
console.log(id);