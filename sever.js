const express = require('express')
const { createConnection} = require('mysql2')
const app = express()

const { join } = require('path')

app.use(express.static(join(__dirname,'public')))
app.engine('handlebars', require
('express-handlebars')({ defaultLayout:
'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req,res) => {
    res.render('index')
})

// app.get('buttons',(req,res) => {
//     res.render('buttons')
// })

// createConnection({
//     host:'localhost',
//     port:3306,
//     user:'root',
//     password:'Kim2019@',
//     database:
// })
app.listen(3000)