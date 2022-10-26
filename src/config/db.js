const mongoose = require('mongoose');

const Dbconnect = async() => {
    try {
        const dbconn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connected at ${dbconn.connection.host}`);    
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    Dbconnect,
}