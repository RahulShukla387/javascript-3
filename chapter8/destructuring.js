let student = {
    name:'rahul',
    age: 20,
    subject: ['hindi','english','physics' ,'chemistry','math'],
    username:'RahulShukla123',
    password: 354,
};
let  {name,username:identity,password = 434} =student;
console.log(name);
console.log(identity);
console.log(username); // now this will not give output because you assign new value identity
