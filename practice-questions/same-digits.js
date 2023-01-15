function checkSameDigits(num){
    let numOfDigits = String(num).length
    if(numOfDigits<=1)
        return true
    let digit = num%10
    num = parseInt(num/10)
    while(num!=0){
        if(num%10!=digit)
            return false
        num = parseInt(num/10)
    }
    return true 
}

let checkSameDigitsArrow = num => {
    let numOfDigits = String(num).length
    if(numOfDigits<=1)
        return true
    let digit = num%10
    num = parseInt(num/10)
    while(num!=0){
        if(num%10!=digit)
            return false
        num = parseInt(num/10)
    }
    return true
}

let num = 1111
console.log(checkSameDigits(num))