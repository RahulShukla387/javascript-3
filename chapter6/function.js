// defining a function

function checkIt(){
    let n = prompt('enter the no you want to check');
    if(n%2 == 0){
        // n = prompt('the no is even');
        console.log('the no is even')
    }
    else{
        // n = prompt('the no is odd');
        console.log('the no is odd');
    }
}
function poem(){
    console.log('Twinkle twinkle little star, how i wonder what you are , ........ like a diamond in the sky');
}

// calling a function
checkIt();
poem();

