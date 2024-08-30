const express = require('express')
const app = express()

const { engine } = require('express-handlebars')
const path = require('path')
const userRoutes = require('./routes/userRoutes')

//defining handlebar engine
app.engine('hbs',engine({extname:'hbs', defaultLayout: false}))
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded())

app.use(userRoutes)


app.listen(8000,()=> console.log("Listening port 8000"))