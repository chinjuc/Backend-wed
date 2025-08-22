const mongoose = require ('mongoose')


const ConnectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Connect")
    } catch (error) {
         console.error("error message", error)
         process.exit((1));
    }
} 

module.exports = ConnectDB