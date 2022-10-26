const dotenv = require('dotenv');
dotenv.config();


const express = require('express');
const port = process.env.PORT;


const { Dbconnect } = require('./config/db')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

Dbconnect();

app.listen(port,() => {
    console.log(`port running on port ${port}`);
})