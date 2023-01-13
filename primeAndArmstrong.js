function isPrime(num){
    for(let i = 2; i <=Math.pow(num,0.5) ; i++){
        if(num%i==0){
            return false
        }
    }
    return true
}


function isArmstrong(num){
    let digits = String(num).length
    let sum = 0
    let temp = num
    while(temp!=0){
        sum = sum + Math.pow(temp%10,digits)
        temp = parseInt(temp/10)
    }
    if(sum===num)
        return true
    else   
        return false;

}

let isPrimeArrow = (num) => {
    for(let i = 2; i <=Math.pow(num,0.5) ; i++){
        if(num%i==0){
            return false
        }
    }
    return true
}


let isArmstrongArrow = (num) => {
    let digits = String(num).length
    let sum = 0
    let temp = num
    while(temp!=0){
        sum = sum + Math.pow(temp%10,digits)
        temp = parseInt(temp/10)
    }
    if(sum===num)
        return true
    else   
        return false;

}
console.log(isPrimeArrow(29))
console.log(isArmstrongArrow(92727))