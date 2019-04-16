
// // // // // IMPORTS // // // // //

require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const session = require('express-session')

const { CONNECTION_STRING, PORT, SESSION_SECRET } = process.env

const app = express()

// // // // // MIDDLEWARE // // // // //

app.use(json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(PORT, () => console.log(`such magic on ${PORT}`))
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// // // // // ENDPOINTS // // // // //


