const mongoose = require ('mongoose')


const FeedSchema  = new mongoose.Schema({
    username: {type :String , required:true},
    password: {type: String, required:true},
    message : {type:String , required:true},
    rating: {type:Number, required:true}
});

const FeedModel = mongoose.model('feeback sended' ,FeedSchema)

module.exports = FeedModel; 