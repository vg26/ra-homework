const user = {
    userName: 'Kevin',
    lastName: 'Russell',
    years: 26,
    idNumber: 111,
    hasDrivingLicense: true,
    emails: ['vg@test.com', 'vg1@test.com', 'vg2@test.com'],

    printMsg: function () {
        {
            if (user.years < 18) {
                isAdult = 'not an adult'
            } else
                isAdult = 'an adult';
        }
        {

            if (user.hasDrivingLicense === true) {
                license = 'has'
            } else
                license = 'does not has';
        }

        return (`This user's name is ${user.userName} and he is ${user.years} years old. He ${license} a driving license and he is ${isAdult}`)
    }
}

console.log('--------------------')

const userEmails = user.emails

console.log(userEmails)

console.log('--------------------')

console.log(user.printMsg())

