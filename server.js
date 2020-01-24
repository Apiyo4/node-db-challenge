const express = require('express');

const ProjectRouter = require('./projects/project-router');
const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.get('/', (req,res)=>{
    res.json(`Welcome`)
})
module.exports = server;