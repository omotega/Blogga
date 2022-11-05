const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const port = process.env.PORT;

const userRouter = require('./routes/userroute');
const articleRouter = require('./routes/articleroute');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res) => {
  res.send('welcome to my blog application');
})

app.use('/api/v1/users', userRouter);
app.use('/api/v1/articles',articleRouter);


module.exports = app;
