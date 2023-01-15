function isLeapYear(year){
    if(year%400===0 || (year%4===0 && year%100!=0))
        return true
    return false
}

let isLeapYearArrow = year => year%400===0 ? true : year%100===0 ? false : year%4===0 ? true : false 

let year = 2000
console.log(isLeapYearArrow(year))