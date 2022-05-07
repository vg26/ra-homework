let zipCode = 7000
let name = 'Kevin'
let country = 'England'
let mobile = 123456

const isCodeValid = (zipCode) => {
    if (zipCode >= 1000 && zipCode <= 7000) {
        return true
    } else
        return false
}

const userRegister = (name, country, mobile, zipCode) => {
    if (isCodeValid(zipCode) === true) {
        return `User name is ${name}, he is from ${country}, with zipcode ${zipCode} and mobile number ${mobile}`
    } else {
        return 'Registration Failed'
    }
}
const results = userRegister(name, country, mobile, zipCode)
console.log(results);



