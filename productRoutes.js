import {Router} from "express";

const productRoutes = Router();

productRoutes
.route("/")
.post((req, res,next)=>{
    console.log("Product bandai xa hai guysss");
})
.get((req, res,next)=>{
    res.json("k xa vaiharu");   
});



productRoutes
.route("/:id")
.get((req, res,next)=>{ })
.patch((req, res,next)=>{ })
.delete((req, res,next)=>{ })

export default productRoutes;   


/* 
localhost:8000/user, post => create a product
localhost:8000/user, get => read all products

localhost:8000/user/:id, get => read a single product
localhost:8000/user/:id, patch => update a product
localhost:8000/user/:id, delete => delete a product
*/