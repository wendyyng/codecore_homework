//------Require the express library from the express dependency------>
const express = require('express');
const app = express();

// Require method-override middleware
const methodOverride = require('method-override');

//--------------------BODY PARSER and URLENCODED MIDDLEWARE-------------------->
app.use(express.urlencoded({extended: true}))

//-----------------Method Override Middleware--------------------------
app.use(methodOverride((req,res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method
    }
}))
app.use(express.json())

//-----STATIC ASSETS-------->
const path = require('path')

//Set up a public directory for these files to reside in
app.use(express.static(path.join(__dirname, 'public')));

//Logging Middleware----->
const logger = require('morgan');
const req = require('express/lib/request');
app.use(logger('dev'));

// Cohort Router
const cohortRoutes = require('./routes/cohorts');
app.use('/cohorts', cohortRoutes)

//---------------------------ROUTERS--------------------------------->
//Home Page
app.get('/', (req, res) => {
    res.render('home')
})

//SET VIEW ENGINE---->
app.set('view engine', 'ejs')
app.set('views', 'views')

//------------------------------SERVER----------------------------
//---Start listening to the server---->
const PORT = 3000;
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})