let rand = Math.floor(Math.random()*10)+1;
let i = 0;
let tell = prompt('guess a no between 1 to 10 to exit enter exit');
while(true){
    i++;
    if(tell == rand){
        console.log('well done you guess it corectly');
        tell = prompt('you guessed it correctly enter exit to exit the game');
        break;
    }

    else if(tell == 'exit'){
        console.log('you are exiting');
        break;
    }
    else if(tell<rand){
         console.log('no is greater than you guess');
         tell = prompt('enter again greater no');
        
    }
    else if(tell>rand){
        console.log('no is smaller than you guess');
        tell = prompt('enter again smaller no');
    }
    // else{
    //     tell = prompt('you guess wrong try again');
    // }
 }
console.log('you guess in  ' + i +' attempts');