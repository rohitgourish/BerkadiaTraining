const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
PORT = 3000;

users = [];

app.use('/',(req,res,next)=>{
    fs.appendFileSync('log.txt',JSON.stringify({"method":req.method,"path":req.url,"date":new Date()})+'\n');
    next();
});

app.post('/insert', (req, res) => {
    try {
        let name = req.body.name;
        let password = req.body.password;
        let profession = req.body.profession;
        let id = req.body.id;

        flag = false;
        for(var i = 0;i<users.length;i++){
            if(parseInt(id)===parseInt(users[i]["id"])){
                flag = true;
            }
        }
        if(flag==true){
            throw new Error('id already exists, enter unique id');
        }
        data = {
            name: name,
            password: password,
            profession: profession,
            id: id
        }

        users.push(data);

        var dataJSON = JSON.stringify(data);

        fs.appendFileSync('output.json','method : '+req.method+' response : '+ dataJSON);
        fs.appendFileSync('output.json', '\n');
        res.json({
            success: 1,
            message: 'data inserted successfully....'
        });
    } catch (error) {
        console.log(error);
        res.json({
            success:0,
            message: error.message
        })
    }
});

app.get('/get/:id', (req, res) => {
    try {
        let id = parseInt(req.params.id);
        flag = false;
        for (var i = 0; i < users.length; i++) {
            if (id === parseInt(users[i]["id"])) {
                res.json(users[i]);
                flag = true;
                fs.appendFileSync('output.json', 'method : '+req.method+' response : '+JSON.stringify(users[i]) + '\n');
            }
        }
        if (flag == false) {
            fs.appendFileSync('output.json','method : '+req.method+' response : '+`id = ${id} not found in users record`);
            throw new Error('id not found in given data');
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            message: error.message
        })
    }
});

app.put('/update/:id', (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let password = req.body.password;
        let profession = req.body.profession;

        flag = false;
        if (password) {
            for (var i = 0; i < users.length; i++) {
                if (id === parseInt(users[i]["id"])) {
                    users[i]["password"] = password;
                    flag = true;
                }
            }
        }

        if (profession) {
            for (var i = 0; i < users.length; i++) {
                if (id === parseInt(users[i]["id"])) {
                    users[i]["profession"] = profession;
                    flag = true;
                }
            }
        }

        if (flag == false) {
            fs.appendFileSync('output.json','method : '+req.method+ ' response : '+`id=${id} not found`);
            throw new Error('id not found, cannot update');
        } else {
            res.json({
                success: 1,
                message: "record updated successfully..."
            })
            fs.appendFileSync('output.json','method : '+req.method+ ' response : '+`id=${id} updated successfullly...`);
        }

    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            message: error.message
        })
    }
});

app.delete('/delete/:id', (req, res) => {
    try {
        let id = parseInt(req.params.id);
        flag = false;
        for (var i = 0; i < users.length; i++) {
            if (id === parseInt(users[i]["id"])) {
                fs.appendFileSync('output.json',`record with id = ${id} deleted successfully \n`);
                users.splice(i, 1);
                flag = true;
            }
        }

        if (flag == true) {
            fs.appendFileSync('output.json','method : '+req.method+ ' response : '+`id=${id} deleted successfullly...`);
            res.json({
                success: 1,
                message: 'record deleted successfully...'
            });
        } else {
            fs.appendFileSync('output.json',`id = ${id} not found in records \n`);
            throw new Error('id not found, enter valid id');
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            message: error.message
        })
    }
});



app.listen(PORT, () => {
    console.log(`Server running successfully at ${PORT}`);
})