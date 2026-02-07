import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide an username'],
        unique: true
    },
    email: { 
        type: String,
        required: [true, 'Please provide an email'],
        unique: true
    },
    password: String
});

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;