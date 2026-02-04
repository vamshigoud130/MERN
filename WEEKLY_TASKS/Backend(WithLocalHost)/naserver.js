// create HTTP server
// import express module
import exp from 'express';
import { MotionConfig } from 'framer-motion';
  // create server
  const app = exp();
  // assign port number
  app.listen(3000, () => console.log(" HTTP server is running or listening on port number 3000"));


  //body parser middleware
  app.use(exp.json());
  
  let users=[];
  let products=[];

  //createing custom middleware

  function middleware1(req,res,next){
    console.log("middleware 1  executed")

  }


  // create  API(req  handler - route)
       
      //get request handling route( Read users)
        app.get('/users',(req,res)=> {
            //send response to client
            res.status(200).json({message:"all users", data:users});
        });

      //post request handling route( create users)
        app.post('/users',(req,res)=>{
            //send res
            const newuser = req.body;
            users.push(newuser);
            res.status(201).json({
        message: "User added successfully",
        data: newuser
    });
            
        })
  //put request handling route( udate users)
   // put request (update user api)



   app.put("/users/:id", (req, res) => {
  //get modified user from req body
  //find the user by id and update the user details
  //if user not found send user not found message
  //if user found update the user details and send success message
  //send res as "user modified"
  
  let modifiedUser=req.body;
  let userId=Number(req.params.id);
  
  let userIndex=users.findIndex(userObj=>userObj.id===modifiedUser);
    if(userIndex===-1){     
       return res.status(404).json({message:"user not found"});
    }
    users[userIndex] = modifiedUser;

    res.status(200).json({message:"user modified",payload:modifiedUser});  



});

        //get request handling route( Read user by id)
        app.get('/users/:id',(req,res)=>{
            console.log(req.params);
            //read id from url parameter
            let userid = Number(req.params.id);
            const user = users.find((userObj) => userObj.id === userid);
            if(user){
                res.json({message:"user found", data:user});
            }
            else{
                res.status(404).json({message:"user not found"});
            }
        });

      //delete request handling route( Read users)
        app.delete('/users/:id',(req,res)=>{
          const deleted_user=Number(req.params.id);
          const index=users.findIndex(u=>u.id === deleted_user );
          if(index===-1){
            res.status(404).json({message:"user not found"});

          }
          const removedUser=users.splice(index,1);
          res.status(200).json({message:"user deleted",payload:removedUser  });
          
            
        })  
  
        //create products API routes

       /* app.get('/products',(req,res)=>{
          res.status(200).json({message:"this response from products api",payload:products});
        })

       app.post("/products",(req,res)=>{
          
          const productId=req.body;
          products.push(productId);
          res.status(201).json({message:"product created",payload:productId});       
        });

        
    app.put("/products/:id",(req,res)=>{
          res.json({message:"this response from products put api"});
         
        });
    app.delete("/products/:id",(req,res)=>{
          res.json({message:"this response from products delete api"});
        });

        */
app.get('/products',(req,res)=>{
  res.status(200).json({message:"this response from products api",payload:products})
});

app.post('/products', (req, res) => {
  let newproduct = req.body;
  products.push(newproduct);
  res.status(201).json({ message: "product created", payload: newproduct });
});


app.put('/products/:id',(req,res)=>{
  let modifiedproduct = Number(req.params.id);
  let index=products.findIndex(u=>u.id === modifiedproduct);
  if(index === -1){
    res.status(404).json({message:"product not found"});
  }
  let update_product=products.splice(index,1,modifiedproduct);
  res.status(200).json({message:"product modified",payload:update_product});

});

app.delete('/products:id',(req,res)=>{
  let deleted_product=Number(req.params.id);
  let index=products.findIndex(u=>u.id === deleted_product);
  if(index === -1){
    res.status(404).json({message:"product not found"});
  } 
  let removedprod=products.splice(index,1);
  res.status(200).json({message:"product deleted",payload:removedprod});  });
