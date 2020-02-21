function verifyUser(username, password, callback) {
    if (username === 'rohit' && password === 'rohit') {
        console.log('successfully executed 1st function');
        callback(username);
    }
}

function getRoles(username, callback) {
    if (username === 'rohit') {
        console.log('successfully executed 2nd function');
        callback({
            "admin": 1,
            "HR": 0
        });
    }
}

function checkUserAccess(roles, callback) {
    if (roles.admin === 1) {
        console.log('successfully executed 3rd function');
        callback('successsfully executed sequentially...');
    } 
}

function authenticateUser(username, password) {
    verifyUser(username, password, function (add1) {
        getRoles(add1, function (add2) {
            checkUserAccess(add2, function (add3) {
                console.log(add3)
            });
        });
    });
}

authenticateUser('rohit', 'rohit');