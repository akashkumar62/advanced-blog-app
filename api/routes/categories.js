const router = require("express").Router();
const Category = require("../models/Category")

router.post("/" ,async(req,res)=>{
    const newCat= new Category(req.body);

    const cat= await Category.findOne({name:req.body.name})
    if(cat){
        try{
         res.status(200).json("hello")
        }catch(err){

        }
    }
  else { try{
         const savedCat= await newCat.save();
         res.status(200).json(savedCat);
    }
    catch(err){
        return res.status(500).json(err);
    }}

})

router.get("/", async (req, res) => {

    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    }
    catch (err) {
        return res.status(500).json(err);
    }

})


module.exports=router