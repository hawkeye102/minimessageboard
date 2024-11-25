 const express = require('express')
 const path = require('path')
 const app = express();
 const indexRoute = require('./Routes/indexroute'); // Path to the indexroute file

 const Port= 4000;

 // Set up EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));




 app.use('/',indexRoute);
 
 app.listen(Port,()=>
 console.log(`the server is running on port ${Port}` )
 )