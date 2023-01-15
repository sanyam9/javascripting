const vowels = ['a','e','i','o','u']
function countVowels(str){
    let count = 0
    for(let idx = 0 ; idx<str.length ; idx++){
        if(vowels.includes(str[idx].toLowerCase()))
            count++
    }
    return count
}

let countVowelsArrow = str => str.split('').filter(char => vowels.includes(char)).length

let str = "codeacademy"
console.log(countVowelsArrow(str))