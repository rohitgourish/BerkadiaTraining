const connection = require('../db/connect');

module.exports = class EmployeeServices {
    async postDetails(id, name, rating) {
        try {
            let pool = await connection.pool.connect();
            let result = await pool.query('insert into employees values($1,$2,$3)', [id, name, rating]);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTeams(size) {
        try {
            let arr = [];
            let sum = [];
            let pool = await connection.pool.connect();
            const result = await pool.query(`select * from employees order by rating desc`);
                        
            for (var i = 0; i < size; i++) {
                arr[i] = [];
                sum[i] = 0;
            }
            let j = 0;
            for (var i = 0; i < result.rows.length; i++) {
                if (i < size) {
                    await arr[j].push(result["rows"][i]);
                    sum[j] = sum[j] + parseInt(result["rows"][i]["rating"]);
                    j++;
                    continue;
                }
                console.log(arr);
                console.log(sum);
                let index = sum.indexOf(Math.min.apply(Math, sum))
                console.log(index)
                while (arr[index].length == (result.rows.length / size)) {
                    sum.splice(index, 1);
                    index = sum.indexOf(Math.min.apply(Math, sum))
                }
                arr[index].push(result.rows[i]);
                sum[index] = sum[index] + parseInt(result["rows"][i]["rating"]);
                
            }
            
            console.log(arr);
            console.log(sum);
            console.log(sum.indexOf(Math.min.apply(Math, sum)));
            return arr;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}