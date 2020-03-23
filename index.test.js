const supertest = require("supertest")
// our server won't actually start due to the if statement in index.js
const server = require("./index")

// integration test for our welcome route
test("welcome route", async() => {
  const res = await supertest(server).get("/")
  expect(res.statusCode).toBe(200) // checks if we are returning the expected status code
  expect(res.type).toBe("application/json") // checks if we are returning the expected data format like json
  expect(res.body.message).toBe("Welcome to our API") // checks if we are returning the expected data
})

// test driven development (TDD)
// is when we write our test first and then the supporting code later.
// it helps us define some requirements of our system before even thinking about writing any code. 

test("create hobbit route", async ()=> {
    // Q: what should we be testing when we create a new hobbit?
    // A: We should call the hobbit end point and send the name as the body (expected data)
    // and then, check the body, and check the status to be 201 (status code)
    const res = await supertest(server)
        .post("/hobbits")
        .send({ name: "gaffer" }) // this is our request object
    expect(res.statusCode).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.name).toBe("gaffer")

})