const express = require("express")
const routes = express.Router()

routes.get("/", (resquest, response) => {
    response.json({
        message: "Hello"
    })
}) 
routes.post("/", (resquest, response) => {
    const body = resquest.body
    response.json({
        ...body, 
        id: Math.random().toString()
    })
}) 
module.exports = routes