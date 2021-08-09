const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

const PRODUCTS = [
    { id: 1, name: 'Product 1', description: 'Description', price: 5342 },
    { id: 2, name: 'Product 2', description: 'Description', price: 1222 },
    { id: 3, name: 'Product 3', description: 'Description', price: 4532 }]

const CART = [
    { name: 'Product 1', price: 5342, quantity: 1 },
    { name: 'Product 2', price: 1222, quantity: 2 }]

// The following code shows the list of products in an array "PRODUCTS" when the page loads for the first time
app.get('/', (req,res)=>{
    res.render("product", {
    product:PRODUCTS
    })
});

//The following code shows product when we give it the directory and id number for a specific product
app.get('/product/:id', (req, res) => {
    res.render("product_specific", {
        ...PRODUCTS.find(e => e.id === parseInt(req.params.id))
    });
});

app.get('/cart', (req, res) => {
    res.render("shoppingcart", {
        products: CART
    });
});

app.listen(3000);