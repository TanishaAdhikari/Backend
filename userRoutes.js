import{ Router } from 'express';

const userRoutes = Router();

userRoutes
.route("/")
.post((req,res,next)=>{
res.json("Product created")//postman lai dina pare res lina pare req
})
.get((req,res,next)=>{
res.json("Products retrieved")
})

userRoutes
.route("/:id")
.get((req,res,next)=>{
})
.patch((req,res,next)=>{

})
.delete((req,res,next)=>{

})

export default userRoutes;