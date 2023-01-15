function checkSuffix(str){
    if(str.length<6)
        return false
    return str.slice(-6)==='Script'
}

let checkSuffixArrow = str => str.endsWith('Script')

let str = 'javaScript'
console.log(checkSuffix(str))