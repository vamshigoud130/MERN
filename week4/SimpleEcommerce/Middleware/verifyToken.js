import jwt from 'jsonwebtoken'


export function verifyToken(req,res,next){
    //token verification logic


    //get token from req(using cookie parser)
     let signedToken=req.cookies.tokens;
     if(!signedToken){
        return res.status(401).json({message:"successful"})
     }

}