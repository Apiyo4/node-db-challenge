const express = require('express');

const db = require('./projectDb');

const router = express.Router();
 router.get('/', async(req,res)=>{
     try{
        const projects = await db.getProjects(); 
        res.json(projects);
     }catch(e){
        console.log(e)
     }
    
 })
module.exports = router;