const express = require('express')
const hbs = require('express-hbs')
const bodyParser = require('body-parser')
const { join } = require('path')


const app = express();
const DEVELOPMENT_PORT = 8080

app.use(bodyParser.urlencoded({
    extended: true
}))

app.engine('hbs', hbs.express4({ // view engine that lets us use handlebars
    defaultLayout: join(__dirname, 'views', 'layouts', 'default'),
    partialsDir: join(__dirname, 'views', 'partials')
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.static(join(__dirname, 'public'))) // Sets public as static folder for css

app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

app.use('/', require('./routes/homeRouter'))

app.listen(DEVELOPMENT_PORT, () => {
    console.log(`Server up and running on port ${DEVELOPMENT_PORT}`)
})