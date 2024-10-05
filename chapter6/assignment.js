// practice problem1
// function findLarger(n){
// let array = [4,6,2,7,3,9,7,8];
// // let n = 6;
// for(let i = 0; i<=array.length;i++){
//     if(array[i]>n){
//         console.log(array[i]);
//     }
// }
// }
// console.log(findLarger(3));


// practiceProblem2

// let string = 'abbcceddfghhi';
// let checked = '';
// for(let i = 0;i<string.length;i++){
//     if(checked.indexOf(string[i]) == -1){
//         checked +=string[i];
//     }
// }
// console.log(checked);


// practice problem3
// function find(){
// let country = ['Australia','Germany','Unitedn States of America','jai ho','India sabka baap hai samjh lo sab log','china', 'nigeria'];
// let greatest = '';
// for(let i = 0; i <country.length;i++){
//     if(greatest.length<country[i].length){
//         greatest = country[i];
//     }
// }
// console.log(greatest);
// }



// practice problem4

// let string = 'fdjkafdjkafsdaehojd';
// let count ='';
// for(let i = 0; i<string.length;i++){
// if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){
//     count += string[i];
// }
// }
// console.log(count.length);



// problem5

let start = 4;
let end = 7;
for(let i = 0;i<10;i++)
{
    console.log(Math.floor((Math.random()*(end-start)))+start+1);
}