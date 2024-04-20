const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
//---------------------------------------Require Statements

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'))
//--------------------------------------require engine


function requestLogger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}
//-------------------Middleware for logging requests

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}
//-------------------Middleware for error handling
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
//-------------------Middleware for body-parser
//----------------------------------------------------------middleWare


const jordans = require('./models/jordans.js');
const yeezys = require('./models/yeezys.js');
const airMaxs = require('./models/airMaxs.js');
//-------------- Data
const jordansRoutes = require('./routes/jordansRoutes');
const yeezysRoutes = require('./routes/yeezysRoutes');
const airMaxsRoutes = require('./routes/airMaxsRoutes');
//--------------Imported route files


app.use(requestLogger); // Middleware to Log requests
app.use(errorHandler); // Middleware to Handle errors

//--------------------------Register middleware

app.use("/jordans", jordansRoutes);
app.use("/yeezys", yeezysRoutes);
app.use("/airMaxs", airMaxsRoutes);
//--------------------------Use the Route files


app.listen(port,() => {
   console.log(`listening on port: ${port}`) 
})
//----------------------------------------------------------------Server


