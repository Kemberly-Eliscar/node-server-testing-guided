const db = require("../data/config")
// import hobbits model
const hobbitsModel = require("./hobbits-model")

beforeEach(async () => {
    await db.seed.run()
})

test("insert", async () => {
    const res = await hobbitsModel.insert({ name: "bilbo"})
    expect(res.name).toBe("bilbo")
})

test("findById", async () => {
    const res = await hobbitsModel.findById(1)
    expect(res.name).toBe("sam")
})

test("update", async () => {
    const res = await hobbitsModel.update(1, { name: "bilbo" })
    expect(res.name).toBe("bilbo")
})

test("remove", async () => {
    await hobbitsModel.remove(1)
    // make an instance to the database to make sure that instance was actually removed:
    const hobbits = await db("hobbits").select()
    expect(hobbits).toHaveLength(3)
})