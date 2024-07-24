// var foo = "bar";
// function magic(){
//     foo = "hello world";
//     console.log(foo);
//     var foo;
// }
// magic();
// console.log(foo);

const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const { password,email } = person;
const [second,first,third] = animals;
console.log(password);
// => bob@marley.com
console.log(third);
