const { Schema, default: mongoose } = require("mongoose");


const userSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    bio: {
        required: false,
        type: String
    },    
})

export const userModel = mongoose?.models.users || mongoose?.model("users", userSchema);
