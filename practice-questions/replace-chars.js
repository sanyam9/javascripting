function replaceChars(str){
    let tempStr = '';
    for(let idx = 0 ; idx < str.length ; idx++){
        let aCode = str[idx]===str[idx].toUpperCase() ? 65 : 97
        tempStr += String.fromCharCode(((str.charCodeAt(idx)+ 1 - aCode)%26)+ aCode)
    }
    return tempStr
}

let replaceCharsArrow = str => String.fromCharCode(...str.split('').map(char => char===char.toUpperCase() ? ((char.charCodeAt() - 64) % 26) + 65 : ((char.charCodeAt() - 96)%26)+97))
let str = "lazyinterns"
console.log(replaceCharsArrow(str))