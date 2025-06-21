const mongoose = require("mongoose");
const connection = require("./connection");

const ProjectSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    confirmpassword : {
        type: String,
        required: true
    },
    phone : {
        type:Number,
        required:true,
        unique: true
    }
});

const Register = mongoose.model("Register", ProjectSchema);

module.exports = Register;
