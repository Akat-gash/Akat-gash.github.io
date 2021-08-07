
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    let name = req.query.name;
    let age = req.query.age;
    if(!name){
        name = "Person";
    }
    if (!age){
        age = "Person's age"
    }
    res.send(`Welcome ${name}. Age: ${age} `);



});
app.listen(3000);
