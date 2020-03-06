const express = require('express');
const app = express();

app.use(express.json());

var student = require('./router/student');

app.use(student);

app.listen(3000,()=>{
    console.log("Server running at 3000");
});
