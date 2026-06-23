import { Router } from "express";
import Book from "../schema/bookSchema.js";

const bookRoutes = Router();
bookRoutes
.route("/")
.post(async(req,res,next)=>{ 
    try {
    let result= await Book.create(req.body);
    res.json({
        success:true,
        message:"Book Created Successfully",
        result:result,
    })

} catch (error) {
    res.json({
        success:false,
        message:error.message,
    });
}})
.get(async(req,res,next)=>{
    try {
          let result= await Book.find();
          res.json({
            success:true,
            message:"Book found Successfully",
            result:result,
          })
    } catch (error) {
       res.json({
        success:false,
        message:error.message,
       })
    
    }
})
bookRoutes
.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result = await Book.findById(req.params.id);
        res.json({
            success:true,
            message:"Book found using ID",
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
   
    })
.patch(async(req,res,next)=>{
    try {
        let result= await Book.findByIdAndUpdate(req.params.id)
        res.json({
            success:true,
            message:"Updated successfully",
            result:result,
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
    }
})

.delete(async(req,res,next)=>{
    try {
        let result= await Book.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Deleted successfully",
            result:result,
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
    }
});
export default bookRoutes;




/* 


.post(async(req,res,next)=>{
    try{
    let result = await Book.create(req.body)
    res.json({
    success:true,
    message:"product created successfully",
    })}})
*/