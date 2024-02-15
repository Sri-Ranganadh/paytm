const mongoose = require('mongoose')
const {MongoConnection} = require('./config')

mongoose.connect(MongoConnection)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password : {
        type : String,
        minLength : 8,
        required : true
    },
    firstName : {
        type : String,
        required :true,
        trim : true,
        maxLength : 50
    },
    lastName : {
        type : String,
        trim: true,
        maxLength :50
    }
})

const User = mongoose.model('User',userSchema)

const accountSchema = new mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const Account = mongoose.model('Account',accountSchema)

module.exports = {
    User,
    Account
};
