import exp from 'express'
import { authenticate, register } from '../AuthService.js'
import { ArticleModel } from '../Models/ArticleModel.js'
import { verifyToken } from '../Middlewares/verifyToken.js'

export const userRoute = exp.Router()

//Register User
userRoute.post('/users',async (req,res) => {
    //Get User Obj from req
    let userObj = req.body
    //Call Register
    const newUserObj = await register({...userObj, role:"USER"})
    //Send Response
    res.status(201).json({ message: "User Created", payload: newUserObj})
    
})
//Read all Articles
userRoute.get('/articles',verifyToken("USER") ,async (req,res) => {
    let articles = await ArticleModel.find({isArticleActive: true})
    res.status(200).json({message:"Articles:- ", payload: articles})
})
//Add comment to an article
userRoute.post('/articles',verifyToken("USER") ,async (req,res) => {
    let {articleId, user, comment} = req.body
    let articleDoc = await   ArticleModel.findById(articleId)
    if(!articleDoc){
        res.status(401).json("Requested Article is not Found")
    }
    let commentedArticle = await ArticleModel.findByIdAndUpdate(articleId,{$push:
        {comments:{user,comment}}
    },{new:true, runValidators: true})
    
    res.status(201).json({message:"Article Commented Successfully",payload: commentedArticle})
    
})
