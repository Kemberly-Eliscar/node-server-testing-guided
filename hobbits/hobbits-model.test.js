const db = require("./data/config")
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