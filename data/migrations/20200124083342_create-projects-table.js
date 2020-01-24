
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl=>{
      tbl.increments();
      tbl.text('name', 128)
        .notNullable();
      tbl.text('description');
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
  })
  .createTable('resources', tbl=>{
    tbl.increments();
    tbl.text('name', 128)
      .notNullable();
    tbl.text('description');
  })
  .createTable('tasks', tbl=>{
    tbl.increments();
    tbl.text('description')
      .notNullable();
    tbl.text('notes');
    tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    tbl.integer('projectId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('schemes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
 .createTable('resources_projects', tbl=>{
    tbl.increments();
    tbl.integer('projectId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    tbl.integer('resourcesId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources');
};
