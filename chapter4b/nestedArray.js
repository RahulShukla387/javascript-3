let heroes = [['ironman','spiderman','thor'],['superman','wonder women','flash']];
for(let i = 0;i<heroes.length; i++){
    // console.log('List #${i}');
    console.log('sequence',i+1);
    for(let j= 0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}
// we can also print out by using for of loop
for(list of heroes){
    for(store of list){
    console.log(store);
}
}
