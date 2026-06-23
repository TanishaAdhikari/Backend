import { Router } from "express";
import Employee from "../schema/employeeSchema.js";

const employeeRoutes = Router();
employeeRoutes
.route("/")
.post(async(req,res,next)=>{ 
    try {
    let result= await Employee.create(req.body);
    res.json({
        success:true,
        message:"Employee Created Successfully",
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
          let result= await Employee.find();
          res.json({
            success:true,
            message:"Employee found Successfully",
            result:result,
          })
    } catch (error) {
       res.json({
        success:false,
        message:error.message,
       })
    
    }
})
employeeRoutes
.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result = await Employee.findById(req.params.id);
        res.json({
            success:true,
            message:"Employee found using ID",
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
        let result= await Employee.findByIdAndUpdate(req.params.id );
        res.json({
            success:true,
            message:"Employee updated successfully",
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
        let result= await Employee.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Employee deleted successfully",
            result:result,
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
    }
});
export default employeeRoutes;

