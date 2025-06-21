require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('./connection');
const Register = require('./registers');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/menu', (req, res) => {
    res.sendFile(__dirname + '/Menu.html');
});

app.get('/recipe', (req, res) => {
    res.sendFile(__dirname + '/recipe.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.get('/product_detail', (req, res) => {
    res.sendFile(__dirname + '/product detail.html');
});




app.use(express.static(__dirname + '/E-com'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// create a new user in our database
app.post("/register", async (req,res) => {
    try {

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if( password === cpassword ){

            const registerPerson = new Register({
                email : req.body.email,
                password : password,
                confirmpassword : cpassword,
                phone : req.body.phone
            })

            const registered = await registerPerson.save();
            res.redirect('/login');
        }else{
            res.send("passwords are not matching")
        }
    } catch (error) {
        res.status(400).send(error);
    }
})


// login check
app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Register.findOne({ email: email });

        if (user) {
            if (user.password === password) {
                res.redirect('/home');
            } else {
                res.status(400).send("Invalid password");
            }
        } else {
            res.status(400).send("User not found");
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
});


const Order = require("./orders");
app.post('/order', async (req, res) => {
    try {
        // Extract item name, price, and receiverName from request body
        const { itemName, itemPrice, receiverName } = req.body;

        // Create a new order instance
        const order = new Order({
            receiverName, 
            itemName,
            itemPrice
        });

        // Save the order to the database
        await order.save();

        // Send success response
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.listen(5500, () => {
    console.log("Server is running on port 5500");
});
