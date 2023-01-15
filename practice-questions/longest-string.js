function findLongestString(stringArr){
    let maxLen = stringArr[0].length
    let longestString = stringArr[0]
    for(let idx = 1 ; idx <stringArr.length ; idx++){
        if(maxLen<stringArr[idx].length){
            maxLen = stringArr[idx].length
            longestString = stringArr[idx]
        }
    }
    return longestString
}

let findLongestStringArrow = stringArr => stringArr.reduce((prevString, currString) => prevString.length<currString.length ? currString : prevString)


let stringArr = ["we", "love", "code", "academy"]
console.log(findLongestStringArrow(stringArr))