var studentService = require('../services/student');
var express = require('express');
var router = express.Router();

router.use("/post", (req,res,next)=>{
    if(req.body.rollNo!==undefined && req.body.name!==undefined && req.body.department!==undefined && req.body.year !== undefined){
        next();
    } else{
        res.json({
            success:0,
            message:"rollNo,name,department,year fields are mandatory"
        });
    }
});

router.post("/post", async (req, res) => {
    try {
        var dataObj = {
            rollNo: req.body.rollNo,
            name: req.body.name,
            department: req.body.department,
            year: req.body.year
        }

        var callService = new studentService();
        var result = await callService.postDetails(dataObj);

        if (result) {
            res.json({
                success: 1,
                message: "record inserted...."
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            message: error.message
        })
    }
});

router.get("/getAllDetails", async (req, res) => {
    try {
        var callService = new studentService();
        var result = await callService.getAllDetails();
        
        if (result) {
            res.send(result);
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            message: error.message
        })
    }
});

router.use("/getById/:rollNo",(req,res,next)=>{
    console.log(isNaN(req.params.rollNo))
    if(isNaN(req.params.rollNo) === false){
        next();
    } else{
        res.json({
            success:0,
            message:"rollNo should be a number"
        })
    }
});

router.get('/getById/:rollNo', async (req, res) => {
    try {
        var rollNo = req.params.rollNo;
        var callService = new studentService();
        var result = await callService.getDetailsById(rollNo);
        if (result !== undefined) {
            res.send(result);
        } else {
            throw new Error("id not present");
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            message: error.message
        })
    }
});

router.use("/update/:rollNo",(req,res,next)=>{
    console.log(isNaN(req.params.rollNo));
    if(isNaN(req.params.rollNo) === false && typeof(req.body.department)=="string" || typeof(req.body.year)=="string"){
        next();
    } else{
        res.json({
            success:0,
            message:"enter department or year to update"
        })
    }
});

router.put("/update/:rollNo", async (req, res) => {
    try {
        var rollNo = req.params.rollNo;
        var dataObj = {
            department :req.body.department,
            year:req.body.year
        }
        console.log(dataObj);
        var callService = new studentService();
        var result = await callService.updateDetails(rollNo, dataObj);
        if (result) {
            res.json({
                success: 1,
                message: "record updated"
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            message: error.message
        })
    }
});

router.use("/delete/:rollNo",(req,res,next)=>{
    console.log(isNaN(req.params.rollNo))
    if(isNaN(req.params.rollNo) === false){
        next();
    } else{
        res.json({
            success:0,
            message:"rollNo should be a number"
        })
    }
});

router.delete("/delete/:rollNo", async (req, res) => {
    try {
        var rollNo = req.params.rollNo;
        var callService = new studentService();
        var result = await callService.deleteDetails(rollNo);
        if (result.deletedCount==1) {
            console.log(result);
            res.json({
                success: 1,
                message: "record deleted"
            });
        } else{
            console.log("error, id not present");
            throw new Error("error, id not present");
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            message: error.message
        });
    }


})

module.exports = router;
