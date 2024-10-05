function adultary(describe){
    if(describe == 'sexual'){
        return 'it is not for below 18';  // return does not print out the values it just store you have to use console.log to print;
    }
    // else if(describe != 'sexual'){
    else{
        return 'everyone can watch it';
    }
}
 console.log(adultary('sexual'));
 console.log(adultary('bestContent'));