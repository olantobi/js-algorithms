function multiplyAndAdd(multiply) {
    const pow = multiply ** multiply
    return function(add) {
        return pow + add
    }
}


const multiplyAndAddArrow = multiply => {
    const pow = multiply ** multiply
    return add => pow + add
}

const multiplyAndAddMoreArrow = multiply => add => add + multiply ** multiply


const result = multiplyAndAdd(2)(4)
const result2 = multiplyAndAddArrow(2)(10)

const result3 = multiplyAndAddMoreArrow(2)(6)

console.log(result)
console.log(result2)
console.log(result3)