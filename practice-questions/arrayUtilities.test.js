const { doubleNumbers, getEvenTripledNumbers } = require('./arrayUtilities')

describe('Array Utility', () => {
    describe('Double Numbers', () => {
        it('Should double the elements when the input is an array', () => {
            const result = doubleNumbers([1, 2, 3])
            expect(result).toEqual([2, 4, 6])
        })
        it('Should throw an error when the input is not an array', () => {
            expect(() => doubleNumbers('abc')).toThrow('Unsupported Input Type')
        })
    })
    
    describe('Triple numbers and filter out even numbers', () => {
        it('Should triple the elements and return the even ones when the input is an array', () => {
            const result = getEvenTripledNumbers([1,2,3,4,5,6,7,8,9])
            expect(result).toEqual([6,12,18,24])
        })
        it('Should throw an error when the input is not an array', () => {
            expect(() => getEvenTripledNumbers('abc')).toThrow('Unsupported Input Type')
        })

        it('Should throw an error when the input array contains anything other than numbers', () => {
            expect(() => getEvenTripledNumbers(['ab',1,2,3])).toThrow('Array should only contain numbers')
        })
        
        it('Should return an empty array if the input array is empty', () => {
            const result = getEvenTripledNumbers([])
            expect(result).toEqual([])
        })

    })
})