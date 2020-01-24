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
    .insert(project, id)
    .then(ids=>{
        return getProjectById(ids[0]);
    })
}
function getResources(){
    return db('resources');
}
function getResourceById(id){
    return db('resources')
    .where({id : Number(id)}).first();
}
module.exports = {getProjects, getProjectById, addProject, getResources, getResourceById};