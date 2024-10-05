// string array for list
let todo = ['studing in morning', 'food in morning','college','code'];
// to add take the string from user 
let add = prompt('enter more todos or enter no ');
if(add == 'no'){
    for(list of todo);
    console.log(todo);
}
else{
todo.push(add);
}
// for delete take another string from user
let del = prompt('enter the string you want to delete or enter nothing enter to exit');
if(del == 'nothing'){
    for(list of todo){
        console.log(list)
    }
}
else{
todo.pop(del);
}
if(del == 'exit'){
    console.log('you are exiting');
}
