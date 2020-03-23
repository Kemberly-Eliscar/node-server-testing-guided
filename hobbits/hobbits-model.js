const db = require("../data/config")

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
}

async function insert(hobbit) {
  const [id] = await db("hobbits").insert(hobbit) // .insert returns an array of ID's
  // we can get a specific id by saying:

  //we're getting the new id from the inserted row and then we are 
  // looking up that row and finding that id and returning that.
  return findById(id)
}

async function update(id, changes) {
  await db("hobbits").update(changes).where("id", id)
  return findById(id)
}

function remove(id) {
  return db("hobbits").where("id", id).del()
}

function getAll() {
  return db("hobbits")
}

function findById(id) {
  return db("hobbits")
  .where("id", id)
  .first()
}
