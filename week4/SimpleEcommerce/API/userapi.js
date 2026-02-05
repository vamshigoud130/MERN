
import exp from 'express';
import { userModel } from "../models/user_model.js";
import { productModel } from '../models/product_model.js';
import { hash, compare } from 'bcryptjs';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { verifyToken } from "../Middleware/verifyToken.js"




export const userApp=exp.Router()

 



// 1. GET all users
userApp.get("/users", async (req, res, next) => {
    try {
        let usersList = await  userModel.find();
        res.json({ message: "Users data retrieved successfully", usersList });
    } catch (err) {
        next(err);
    }
});
/*
userApp.post("/users", async (req, res) => {
// get new users from req
let newUser = req.body;
let newUserDoc = new userModel(newUser);
//save in db
await newUserDoc.save()
res.json({ message: "user created successfully" })
})
*/

// 2. GET single user by ID (The missing route!)
userApp.get("/users/:id", async (req, res, next) => {
    try {
        let user = await userModel.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User found", user });
    } catch (err) {
        next(err);
    }
});

// 3. POST create a new user

userApp.post("/users", async (req, res) => {
  //get user from req
  let newUser = req.body;
    //run validator
  await new userModel(newUser).validate();

  //hash password
  let hashedPassword = await hash(newUser.password, 10);
  //replace plain password with hashed password
  newUser.password = hashedPassword;
  //create new user document
  let newUserDocument = new userModel(newUser);
  //save
  await newUserDocument.save({validateBeforeSave:false});
  //res
  res.status(201).json({ message: "User created" });
});

// 4. PUT update user by ID (The other missing route!)
userApp.put("/users/:id", async (req, res, next) => {
    try {
        let user = await userModel.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true, runValidators: true }
        );
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User updated successfully", user });
    } catch (err) {
        next(err);
    }
});

// 5. POST add product to a user's cart
userApp.post("/users/add-to-cart/:id", async (req, res, next) => {
    try {
        const userId = req.params.id;
        const { productId } = req.body;
        let updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $push: { cart: { product: productId } } },
            { new: true }
        )

        res.json({ message: "Product added to cart", updatedUser });
    } catch (err) {
        next(err);
    }
});

// 6. DELETE user by ID
userApp.delete("/users/:id", async (req, res, next) => {
    try {
        let deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User deleted", deletedUser });
    } catch (err) {
        next(err);
    }
});




//add product to cart

userApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res, next) => {
    {
    try {
      const { uid, pid } = req.params;

      const user = await userModel.findById(uid);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const product = await productModel.findById(pid);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      //  Check if product already exists in cart
      const cartItem = user.cart.find(
        item => item.product.toString() === pid
      );

      if (cartItem) {
        //  Product exists → increment quantity
        cartItem.quantity += 1;
      } else {
        // Product not exists → add new product
        user.cart.push({
          product: pid,
          quantity: 1
        });
      }

      await user.save();

      res.status(200).json({
        message: "Product added to cart",
        payload: user
      });

    } catch (err) {
      next(err);
    }
  }
});


//get product in cart
userApp.get('/user/:id', async(req,res)=>{
     let {id} = req.params;
     //find user
     let userObj = await userModel.findById(id).populate('cart.product')
     //res
     res.status(200).json({message:"product in cart",userObj})
})
