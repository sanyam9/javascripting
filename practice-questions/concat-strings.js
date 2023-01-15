function concat(strArr){
    return strArr[0].slice(1) + strArr[1].slice(1)
}

let concatArrow = strArr => strArr[0].slice(1).concat(strArr[1].slice(1))

let strArr = ["code", "academy"]
console.log(concatArrow(strArr))