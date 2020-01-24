const express = require('express');

const db = require('./projectDb');

const router = express.Router();
  router.get('/', async(req,res)=>{
    try{
       const tasks = await db.getTasks(); 
       res.json(tasks);
    }catch(e){
       console.log(e)
    }
   
})
router.get('/:id', async(req,res)=>{
    try{
       const {id} = req.params;
       const task = await db.getTaskById(id);
       res.json(task);
    } catch(e){
       console.log(e)
    }
} )
router.post('/', async (req,res)=>{
    try{
        const body = req.body;
        const id = await db.addResource(body);
        res.json(`Task with id ${id} was added`);

    }catch(e){
        console.log(e)
    }
})
module.exports = router;