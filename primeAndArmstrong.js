function isPrime(n){
    for(let i = 2; i <=Math.pow(n,0.5) ; i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

function isArmstrong(n){
    let digits = String(n).length
    let sum = 0
    let temp = n
    while(temp!=0){
        sum = sum + Math.pow(temp%10,digits)
        temp = parseInt(temp/10)
    }
    if(sum===n)
        return true
    else   
        return false;

}
console.log(isPrime(29))
console.log(isArmstrong(92727))