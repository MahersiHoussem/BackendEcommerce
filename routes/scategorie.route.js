const express = require('express');
const router = express.Router();
const SCategorie=require("../models/scategorie")
router.get("/",async(req,res)=>{
    try{
        const scat=await SCategorie.find()
        res.status(200).json(scat)
    }catch(error){
        res.status(200).json({message:error.message})
    }
})
module.exports=router