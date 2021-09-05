const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/MybookApp',{
    useNewUrlParser: true ,
    useUnifiedTopology: true 
})

const User= mongoose.model('User',{
    uid:Number,
    uname:String,
    pswd:String

})

const Book=mongoose.model('Book',{
    bookname:String,
    author:String,
    price:Number,
    no_copies:Number,
    image:String,
    sold:Number,
})

module.exports={User,Book}