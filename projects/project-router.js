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
 router.get('/:id', async(req,res)=>{
     try{
        const {id} = req.params;
        const project = await db.getProjectById(id);
        res.json(project);
     } catch(e){
        console.log(e)
     }
 } )
module.exports = router;