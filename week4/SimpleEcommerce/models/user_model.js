import { Schema, model } from "mongoose";

// 1. Define Cart Schema
const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product',      
    },
    quantity: {
        type: Number,
        default: 1
    }
    
});

// 2. Define User Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[7,"minimum length is 7"],
        state:false
        
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },

    // If you want a user to have a cart, it should usually be an array of cart objects 
    // or a reference, rather than just a Number.
    cart: [cartSchema] // This allows the user to have a list of products in their cart
});

// 3. Create User Model
export const userModel = model("user", userSchema);