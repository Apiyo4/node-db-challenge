const db = require('../data/db.config');


function getProjects(){
    return db('projects');
}
function getProjectById(id){
    return db('projects')
    .where({id : Number(id)}).first();
}
function addProject(project){
    return db('projects')
    .insert(project)
    
}
function getResources(){
    return db('resources');
}
function getResourceById(id){
    return db('resources')
    .where({id : Number(id)}).first();
}
function addResource(resource){
    return db('resources')
    .insert(resource)
    
}
function getTasks(){
    return db('tasks');
}
function getTaskById(id){
    return db('tasks')
    .where({id : Number(id)}).first();
}
function addTask(task){
    return db('tasks')
    .insert(task)
    
}
module.exports = {getProjects, getProjectById, addProject, getResources, getResourceById, getTasks, getTaskById, addResource, addTask};