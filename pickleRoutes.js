import { Router } from "express";
import Pickle from '../schema/pickleSchema.js';
const pickleRoutes = Router();

pickleRoutes    
.route("/")
.get(async(req, res,next)=>{
    try {  
        let result = await Pickle.find();
        res.json({
            success: true,
            message: "Pickles found successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,  
            error: error.message
        }); 
    }
})
.post(async(req, res,next)=>{
    try {
        let newPickle = new Pickle(req.body);
        let result = await newPickle.save();
        res.json({
            success: true,
            message: "Pickle created successfully",
            result: result
        });
    }
        catch (error) {
            res.json({
                success: false,
                error: error.message
            });
        }

})

export default pickleRoutes;