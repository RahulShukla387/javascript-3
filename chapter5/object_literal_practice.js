const information = {
    username: 'Rahul shukla', Content: 'all about the topic how to study more in less',
    Likes: '100000000', Reposts: '342234', tags: ['mahesh.user', 'ragini.user','aradhya.user']
};
console.log(information);
// to print only one value from the object literals use
// methods 1
console.log(information.username);
console.log(information.tags[1]);
// methods 2
console.log(information['username']);
console.log(information['tag']);  // here you can not print the particular index