import { Router } from "express";
import Student from "../schema/studentSchema.js";

const studentRoutes = Router();
studentRoutes
.route("/")
.post(async(req,res,next)=>{ 
    try {
    let result= await Student.create(req.body);
    res.json({
        success:true,
        message:"Student Created Successfully",
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
          let result= await Student.find();
          res.json({
            success:true,
            message:"Student found Successfully",
            result:result,
          })
    } catch (error) {
       res.json({
        success:false,
        message:error.message,
       })
    
    }
})
studentRoutes
.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result = await Student.findById(req.params.id);
        res.json({
            success:true,
            message:"Student found using ID",
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
        let result= await Student.findByIdAndUpdate(req.params.id);
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
export default studentRoutes;

