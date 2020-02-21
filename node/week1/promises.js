verifyUser = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'rohit' && password === 'pydisetti') {
                console.log('successfully executed 1st function');
                resolve('rohit');
            } else {
                console.log('failure');
                reject('failure');
            }
        });
    });
}

getRoles = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'rohit') {
                console.log('successfully executed 2nd function');
                resolve({
                    "admin": 1,
                    "HR": 0
                });
            } else {
                console.log('failure');
                reject('failure');
            }
        });
    });
}

checkUserAccess = (roles) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (roles.admin === 1) {
                console.log('successfully executed 3rd function');
                resolve('success');
            } else if (roles.HR === 1) {
                console.log('success');
                resolve('success');
            } else {
                console.log('failure');
                reject('failure');
            }
        });
    });
}


authenticateUser = (username, password) => {
    verifyUser(username, password).then(getRoles).then(checkUserAccess).then(() => {
        console.log('Hurrraayyy executed sequentially.....')
    }).catch(() => {
        console.log('failure')
    });
}

authenticateUser('rohit', 'pydisetti');