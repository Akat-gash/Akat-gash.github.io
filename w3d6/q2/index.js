const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    
    res.render("form");
});

app.post('/output', (req, res)=>{
    res.render('output', {
        NAME:req.body.name,
        AGE:req.body.age,
    });
});
app.listen(3000);