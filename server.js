const express = require('express');

const ProjectRouter = require('./projects/project-router');
const ResourceRouter = require('./projects/resource-router');
const TaskRouter = require('./projects/task-router');
const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);
server.get('/', (req,res)=>{
    res.json(`Welcome`)
})
module.exports = server;