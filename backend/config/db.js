const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // const conn = await mongoose.connect(process.env.REACT_APP_MONGO_URI);
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/Noud63');        
        console.log(`MongoDB Connected: ${conn.connection.host}`.brightMagenta)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB