const carMake = ['Mercedes', 'Peugeot', 'Audi', 'Kia']
console.log(carMake)

console.log('----------------------')

carMake.unshift('BMW');
console.log(carMake);

console.log('----------------------')

if ((carMake.includes('BMW') === true)) {
    console.log('BMW is part of the array')
} else
    console.log('BMW is not part of the array')

console.log('----------------------')

console.log(carMake.sort());