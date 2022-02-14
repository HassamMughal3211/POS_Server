const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "cashier", "stockMng"]
    },
    phoneNumber: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    password: {
        type: String,
        default: "pos123"
    },
})

userSchema.pre("save", async function(next){
    if(this.isModified("password")) return next();
    var encryptedPassword = await bcrypt.hash(this.password,12);
    this.password = encryptedPassword;
})

const User = new mongoose.model("user", userSchema);

module.exports = User;