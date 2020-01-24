const express = require('express');

const db = require('./projectDb');

const router = express.Router();
  router.get('/', async(req,res)=>{
    try{
       const resources = await db.getResources(); 
       res.json(resources);
    }catch(e){
       console.log(e)
    }
   
})
router.get('/:id', async(req,res)=>{
    try{
       const {id} = req.params;
       const resource = await db.getResourceById(id);
       res.json(resource);
    } catch(e){
       console.log(e)
    }
} )
module.exports = router;