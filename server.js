require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.set("strictQuery", true);
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
        console.log('Rodando base de dados')
    })
    .catch(e => console.log(e));

    const session = require('express-session')
    const MongoStore = require('connect-mongo');
    const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))



app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Rodando')
        console.log('http://localhost:3000')
    })
})