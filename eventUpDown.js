// let inp = document.querySelector('input');
 

// inp.addEventListener('keydown', function(event){
//     console.log(event.key); // print exactly what is seen in your screen
//     alert(event.code); // print its name;
//         console.log(event.key);
//     console.dir(event);
//      console.log('key was pressed');
    
// })

// for printing password info
//     let password = document.querySelector('#pass');
//  let form = document.querySelector('form');
//  form.addEventListener('submit',function(event){
//     event.preventDefault();
//     console.log(inp.value);
//     console.log(password.value);
//     console.log(event.key);
//     console.dir(event);
//      console.log('key was pressed');
    
// })


// another way of printing the info

// let form = document.querySelector('form');
// form.addEventListener('submit', store);
//     function store(event){
//     event.preventDefault();
//      console.log(form.elements);
//    let user= form.elements[0]
//    let password= form.elements[1]
//    alert(`Hi your username is ${user.value} , and your password is ${password.value}`);
// }
form.addEventListener('change', function(){
    let user= form.elements[0]
    let password= form.elements[1]
    alert(`Hi your new username is ${user.value} , and your new password is ${password.value}`);
 }
);