function callSay(copy,count){
    for(let i = 0; i<=count;i++){
        copy();  // it call copy fn
    }
}

let say = function(){
    console.log('hey Rahul good morning');
}
console.log(say());
// calling callSay fn
callSay(say,9);  // in copy fn we give say fn;  we can not used as say(), it means that we are calling that fn