import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default : 0
        },
        gender: {
            type: String,
            default :""
        },
        address: {
            type: String,
            default :""
        },
        city: {
            type: String,
            default :""
        },
        state: {
            type: String,
            default :""
        },
        education: {
            type: String,
            default :""
        },
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model('User',userSchema);