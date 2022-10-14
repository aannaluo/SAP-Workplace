// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const cors = require("cors");
const sendEmail = require('./backend/sendEmail');

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

// Require Model
const Users = require('./models/userSchema');

// Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
})

// Registration
app.post('/register', async (req, res)=> {
    try {
        // Get body or data
        const email = req.body.email;
        const password = req.body.password;
        const position = req.body.position;

        const createUser = new Users({
            email : email,
            password : password,
            position : position
        });
        // Save Method is Used to Create User or Insert User
        // But Before Saving or Inserting, Password wil Hash
        // Because of Hashing. After Hash, It will save to DB
        const created = await createUser.save()
        console.log(created);
        res.status(200).send("Registered");

    } catch(error) {
        res.status(400).send(error)
    }
})
// Login User
app.post('/login', async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(req.body)

        // Find user if exists
        const user = await Users.findOne({email : email});
        if(user) {
            // Verify Password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch) {
                // Generate Token which is defined in user schema
                // const token  = await user.generateToken();
                // res.cookie("jwt", token, {
                //     // Expires Token in 24 Hours
                //     expires : new Date(Date.now() + 86400000),
                //     httpOnly : true
                // })
                res.status(200).send("LoggedIn"); 

            } else {
                res.status(400).send("Invalid Credentials");
            }
        } else {
            res.status(400).send("Invalid Credentials");
        }
    } catch(error) {
        console.log("catch")
        res.status(400).send("error");
    }
})

// Send Email
app.post("/api/sendemail", async(req, res) => {
    const {email} = req.body; 
 
    try {
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        const subject = "Event registered!";
        const message = "hello everyone";
        await sendEmail(subject, message, send_to, sent_from, reply_to);
        console.log("hello");
        res.status(200).send("success");
    } catch(error) {
         res.status(500).send("didn't work");
    }
 });

// Run Server
app.listen(port, ()=>{
    console.log("Server is Listening")
})

