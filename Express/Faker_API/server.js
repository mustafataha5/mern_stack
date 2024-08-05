



// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };

const createUser = () =>  {
    const newFaker = {
        id : faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName() ,
        phoneNumber: faker.phone.number() ,
        email : faker.internet.email(),
        password : faker.internet.password() , 
    }
    return newFaker ;
}

const createCompany = () =>  {
    const newFaker = {
        id : faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street : faker.location.street() , 
            city: faker.location.street() ,
            state: faker.location.state() , 
            zipcode: faker.location.zipCode(),
            conutry: faker.location.country(), 
        }
    }
    return newFaker ;
}
    
const companies = []; 
const users = [] ; 
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);
// const user1 = createUser() ; 
// console.log(user1);
// const com1 = createCompany() ; 
// console.log(com1);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */


const express = require("express");
const app = express();
const port = 8000;


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser >>>> <<<<");
});

app.get('/api/users/new' ,(req,res) => {
    const newUser = createUser() ; 
    users.push(newUser) ; 
    res.json(newUser) ; 
});

app.get("/api/companies/new" ,(req,res) => {
    const newCompany = createCompany() ; 
    companies.push(newCompany) ;  
    res.json(newCompany) ; 
});


app.get('/api/users' ,(req,res) => {
    res.json(users) ; 
});

app.get("/api/companies" ,(req,res) => {
    
    res.json(companies) ; 
});


const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
  );
  
  





