function swapCase(str){
    let tempStr = ""
    for(let idx = 0 ; idx<str.length; idx++){
        tempStr += str[idx]===str[idx].toUpperCase() ? str[idx].toLowerCase() : str[idx].toUpperCase()
    }
    return tempStr
}

let swapCaseArrow = str => str.split('').reduce((finalStr,tempChar) => finalStr + (tempChar===tempChar.toUpperCase() ? tempChar.toLowerCase() : tempChar.toUpperCase()), "")


let str = "MeRRy hAD a LITTle lAMp"
console.log(swapCase(str))
