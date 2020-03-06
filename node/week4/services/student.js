var connect = require('../db/connect');

module.exports = class StudentServices{
    async postDetails(data){
        try {
            var student = new connect.StudentModel(data);
            var result = await student.save();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllDetails(){
        try {
            var result = await connect.StudentModel.find().exec();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getDetailsById(rollNo){
        try {
            var result = await connect.StudentModel.find({rollNo:rollNo}).exec();
            return result[0];
        } catch (error) {
            throw error;
        }
    }

    async updateDetails(rollNo,dataObj){
        try {
            var student = await connect.StudentModel.find({rollNo:rollNo}).exec();
            // console.log(student[0]);
            // console.log(dataObj["department"]);
            // console.log(dataObj["year"]);
            if(student[0]!== undefined){
                if(dataObj["department"]!==undefined){
                    console.log({department:dataObj["department"]});
                    student[0].set({department:dataObj["department"]});
                    var result = await student[0].save();
                } 
                if(dataObj["year"]!==undefined){
                    console.log({year:dataObj["year"]});
                    student[0].set({year:dataObj["year"]});
                    var result = await student[0].save();
                }
                return result;
            } else{
                throw new Error("id not present");
            }
        } catch (error) {
            throw error;
        }
    }

    async deleteDetails(rollNo){
        try {
            var result = await connect.StudentModel.deleteOne({rollNo:rollNo}).exec();
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }
}
