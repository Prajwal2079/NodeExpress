const express = require('express');
const bodyparser  = require('body-parser');
const path = require('path');
const routes = require('./router')

const port = 8081;

var app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,"public")))
routes(app);

app.listen(port,()=>{
    console.log("Server is running on port 8081")
})
