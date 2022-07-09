const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}))

app.use(methodOverride((req,res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method
    }
}))
app.use(express.json())

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

const logger = require('morgan');
const req = require('express/lib/request');
app.use(logger('dev'));

// Cohort Router
const cohortRoutes = require('./routes/cohorts');
app.use('/cohorts', cohortRoutes)


// Home Page
app.get('/', (req, res) => {
    res.render('home')
})

app.set('view engine', 'ejs')
app.set('views', 'views')

// Server
const PORT = 3000;
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})