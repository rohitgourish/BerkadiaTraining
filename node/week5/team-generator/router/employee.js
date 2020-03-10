const express = require('express');
const router = express.Router();
const employeeService = require('../services/employee');

router.use("/insert",async(req,res,next)=>{
    if(req.body.rating>=1 && req.body.rating<=5){
        next();
    } else{
        res.json({
            success:0,
            message:"enter rating between 1 and 5"
        })
    }
})

router.post("/insert",async (req, res) => {
    try {
        let id = req.body.id;
        let name = req.body.name;
        let rating = req.body.rating;
        let callService = new employeeService();
        let result =await callService.postDetails(id, name, rating);
        
        if (result.rowCount) {
            res.send({
                success: 1,
                message: 'record inserted'
            });
        }
    } catch (error) {
        console.log(error);
    }
});

router.get("/getTeams/:size", async (req,res)=>{
    try {
        let size = req.params.size;
        let callService = new employeeService();
        let result = await callService.getTeams(size);
        if(result){
            res.send(result)
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;