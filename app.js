'use strict';
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const path = require('path'); 
// const session = require('express-session');
const corsOpts = {
    origin: '*',
    methods: ['GET','POST','DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type',],};

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors(corsOpts));

 mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://root:root@fos.qdtcl.mongodb.net/fos?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=>
        console.log('connected to DB!')
)

// const MongoStore = require('connect-mongo')(session);

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });


  // app.get('*', (req,res) => 
  //   res.sendFile(path.json(__dirname, 'fos/dist/fos/index.html'))
  //   ) //
  
 
  app.use(express.static('fos/dist/fos'))

// //Advanced usage
// const connection = mongoose.createConnection('mongodb+srv://root:root@fos.qdtcl.mongodb.net/fos?retryWrites=true&w=majority',
// {useNewUrlParser: true, useUnifiedTopology: true});


// const sessionStore = new MongoStore({
//     mongooseConnection : connection,
//     collection: 'sessions'
//   });

// app.use(session({
//       secret : 'some secret',
//       resave : false,
//       saveUninitialized : true,
//       store : sessionStore,
//       cookie:{
//           maxAge : 1000 * 60 * 60 * 24
//       }
//   })),

app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));

const orderDetailsRouter = require('../ofos/routers/orderDetails')
app.use('/orderDetails', orderDetailsRouter)

const tableRouter = require('../ofos/routers/table')
app.use('/table', tableRouter)

const feedbackRouter = require('../ofos/routers/feedback')
app.use('/feedback', feedbackRouter)

const orderRouter = require('../ofos/routers/order')
app.use('/order', orderRouter)

const menuRouter = require('../ofos/routers/menu')
app.use('/menu', menuRouter)

const staffRouter = require('../ofos/routers/staff')
app.use('staff', staffRouter)

//Changing status from vaccant to Occupied
app.get(':table_no', async(req, res) => {
    res.statusCode = 302;
  res.setHeader("Location", __dirname+"index.html/home/:table_no");
  res.end();
});
//res.sendFile(path.join(__dirname + '/index.html/:table_no'));


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started at ${PORT}`) )