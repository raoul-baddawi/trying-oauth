const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        const cnct = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })

        console.log (`MongoDB Connected: ${cnct.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB 