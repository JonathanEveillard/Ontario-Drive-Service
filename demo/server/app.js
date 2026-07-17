const express = require('express')
const path = require('path')

const appointementRouter = require('./routes/appointments')
const authRouter = require('./routes/auth')
const app = express()

app.use(express.static(path.join(__dirname, '../app')));
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json())
app.use('/',appointementRouter)
app.use('/', authRouter)


app.listen(3000, ()=> {
    console.log("Server running on port localhost:3000")
})