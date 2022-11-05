const { Dbconnect } = require('./config/db')
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT;

Dbconnect();

app.listen(port, () => {
  console.log(`port running on port ${port}`);
});