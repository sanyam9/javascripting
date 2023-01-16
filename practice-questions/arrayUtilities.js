const doubleNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('Unsupported Input Type')
    }
    return numbers.map(num => num * 2)
}

const getEvenTripledNumbers = (numbers) => {
    if (!Array.isArray(numbers)){
        throw new Error('Unsupported Input Type')
    }
    if(numbers.some(isNaN)){
        throw new Error('Array should only contain numbers')
    }
    return numbers.map(num => num*3).filter(num => num%2===0)
}
//console.log(getEvenTripledNumbers(['']))
module.exports = { doubleNumbers, getEvenTripledNumbers}