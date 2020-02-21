verifyUser = (username, password) => {
    if (username === 'rohit' && password === 'pydisetti') {
        console.log("successfully executed 1st function");
        return "rohit";
    } else {
        console.log("failure 1st function");
        throw new Error("failed first function")
    }
}

getRoles = (username) => {
    if (username === 'rohit') {
        console.log("successfully executed 2nd function");
        return {
            "admin": 1,
            "HR": 0
        };
    } else {
        console.log('failed 2nd function');
        throw new Error("failed second function");
    }
}

checkUserAccess = (roles) => {
    if (roles.admin === 1) {
        console.log("successfully executed 3rd function");
        return "success";
    } else if (roles.HR === 1) {
        console.log('successfully executed 3rd function');
        return "success";
    } else {
        console.log('failure');
        throw new Error("failed second function");
    }
}

authenticateUser = async (username, password) => {
    try {
        var verify = await verifyUser(username, password);
        console.log(verify+" testing");  //just for verification purpose
        var getroles = await getRoles(verify);
        var checkaccess = await checkUserAccess(getroles);
        if (checkaccess) {
            console.log('successfullyyy executed sequentialyyy.....');
        }
    } catch (error) {
        console.log(error)
    }
}

authenticateUser('rohit', 'pydisetti');