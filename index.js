import router from "./config/routes.js"
import express from "express"
import ErrorConverterFactory from "./app/converter/ErrorConverterFactory.js"

const server = express()

server.use("/", router)

server.use( (err, req, res, next) => {
    
    const errorConverter = ErrorConverterFactory.getErrorConverter(err)
    res.status(400).send( errorConverter.convert( err ) )
    next()
    
})

server.listen(3000, () => {
    console.log("-----------------------------------------------");
    console.log("--             Aplicacao iniciada            --");
    console.log("-----------------------------------------------");
})