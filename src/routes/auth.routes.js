// this file is for the api part 

const express = require("express");
const authController = require("../controllers/auth.controllers");

const router = express.Router();

// post register access krne ke lie /api/auth/register
router.post("/register",authController.registerUser)
router.get("/test",(req,res)=>{
    console.log("Cookies :",req.cookies)
    res.json({
        message:"Test route",
        cookies:req.cookies
    })
})



module.exports = router;