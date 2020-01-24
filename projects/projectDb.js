const db = require('../data/db.config');


function getProjects(){
    return db('projects');
}
function getProjectById(id){
    return db('projects')
    .where({id : Number(id)}).first();
}
module.exports = {getProjects, getProjectById};