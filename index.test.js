const supertest = require("supertest")
// our server won't actually start due to the if statement in index.js
const server = require("./index")

test("welcome route", async() => {
  const res = await supertest(server).get("/")
  expect(res.statusCode).toBe(200) // checks if we are returning the expected status code
  expect(res.type).toBe("application/json") // checks if we are returning the expected data format like json
  expect(res.body.message).toBe("Welcome to our API") // checks if we are returning the expected data
})