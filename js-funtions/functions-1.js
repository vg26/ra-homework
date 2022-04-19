function userInfo(name, surname, age, username, password) {
    if (name === undefined) {
        console.log('Name was not provided');
    } else if (surname === undefined) {
        console.log('Surname was not provided');
    } else if (age === undefined) {
        console.log('Age was not provided');
    } else if (username === undefined) {
        console.log('Username was not provided');
    } else if (password === undefined) {
        console.log('Password was not provided');
    } else {
        console.log(`Hello my name is ${name} ${surname}. I'm ${age} years old and my username and password are: ${username}/${password}`);
    }
}
userInfo('Vladimir', 'Gulabovski', '33', 'vg26', 'password');