exports.up = async function(knex) {
	await knex.schema.createTable("hobbits", (table) => {
		table.increments()
		table.text("name").notNullable().unique()
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("hobbits")
}
