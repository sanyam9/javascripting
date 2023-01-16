const doubleNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('Unsupported Input Type')
    }
    return numbers.map(num => num * 2)
}

const getEvenTripledNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('Unsupported Input Type')
    }
    if (numbers.some(isNaN)) {
        throw new Error('Array should only contain numbers')
    }
    
    //return numbers.map(num => num*3).filter(num => num%2===0)
    
    // return numbers.reduce((acc, curr) => {
    //     if (curr % 2 === 0){
    //         acc.push(3*curr)
    //     }
    //     return acc
    // }, [])
    
    return numbers.reduce((acc,curr) => curr%2===0 ? [...acc,curr*3] : acc,[])
}
console.log(getEvenTripledNumbers([1,2,3,4,5,6,7,8,9]))
module.exports = { doubleNumbers, getEvenTripledNumbers }