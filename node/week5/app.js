const express = require('express');
const app = express();
const employee = require('./router/employee');

app.use(express.json());
app.use(employee);

app.listen(3000,()=>{
    console.log("server running at 3000");
});