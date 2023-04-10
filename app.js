const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3000
const ehb = require('express-handlebars');
const path = require('path')

//load confic
dotenv.config({path: './config/config.env'})
connectDB()
const app = express();

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//logging
// app.engine('.hbs', expHandlebars({defaultLayout: 'main', extname: '.hbs'}))
// app.set('view engine', '.hbs')

app.engine('.hbs', ehb({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)) 