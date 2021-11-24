const express = require('express')()


class IllegalArgumentError extends Error{}


express.use( (req, resp, next) => { 
    next(new IllegalArgumentError("erro brabo"))
    resp.send("Testando")
})

express.use(( err, req, rep, next) => {
    console.log(err.constructor.name);
})

express.listen(3000, () => {
    console.log("teste");
})