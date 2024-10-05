
function rollDice(){
    while(true){
    let roll = prompt('write roll to roll the dice');
    if(roll = 'roll'){
        console.log(Math.floor(Math.random()*6)+1);
    }
    if(roll == 'exit'){
    console.log('exiting the game');
}
break;
}

}

// calling function
rollDice();