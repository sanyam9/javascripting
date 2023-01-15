// Approach 1:
let largestNum = -1
function getLargestEvenNumber(num){
    if(num%2===0)
        largestNum = Math.max(num,largestNum)
}

let getLargestEvenNumberArrow = num => {
    if(num%2===0)
        largestNum = Math.max(num,largestNum)
}

let numArr = [1, 3, 5, 7]
numArr.forEach(getLargestEvenNumberArrow)
console.log(largestNum)

// Approach 2:
function getLargestEvenNumber(numArr){
    let largestNum = -1
    for(let i = 0 ; i<numArr.length ; i++){
        if(numArr[i]%2===0)
            largestNum = Math.max(largestNum,numArr[i])
    }
    return largestNum
}

let getLargestEvenNumberArrow = numArr => {
    let largestNum = -1
    for(let i = 0 ; i<numArr.length ; i++){
        if(numArr[i]%2===0)
            largestNum = Math.max(largestNum,numArr[i])
    }
    return largestNum
}
let numArr = [1, 2, 3, 4, 5]
console.log(getLargestEvenNumberArrow(numArr))