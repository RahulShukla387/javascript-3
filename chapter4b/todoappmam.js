
let task = [];
while(true){
   let req = prompt('please enter your request');
    if(req == 'quit'){
        console.log('i am quitting');
        break;
    }
    if(req == 'add'){
        let x = prompt('enter the item you want add');
        task.push(x);
    }
 if(req == 'list'){
        console.log('it is your list');
        for(list of task){
            console.log(list);
        }
        console.log('............');
    }
    if(req=='delete'){
      let y = prompt('enter the index you want delete');
      let z = task.indexOf(y);
      // first find index
      //delete with the help of splice
      task.splice(z, 1);
    }
}