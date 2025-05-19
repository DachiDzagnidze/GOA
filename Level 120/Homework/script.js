function isSubset(setA, setB) {
    for (let item of setA) {
        if (!setB.has(item)) {
            return false
        }
    }
    return true
}

function invertMap(map) {
    let newMap = new Map()
    for (let pair of map) {
        let key = pair[0]
        let value = pair[1]
        newMap.set(value, key)
    }
    return newMap
}

function keysWithMaxValue(map) {
    let max = -Infinity
    for (let pair of map) {
        let value = pair[1]
        if (value > max) {
            max = value
        }
    }

    let result = []
    for (let pair of map) {
        let key = pair[0]
        let value = pair[1]
        if (value === max) {
            result.push(key)
        }
    }
    return result
}

let setA = new Set([1, 2])
let setB = new Set([1, 2, 3])
console.log(isSubset(setA, setB))

let map1 = new Map([['a', 1], ['b', 2], ['c', 1]])
console.log(invertMap(map1))

let map2 = new Map([['a', 5], ['b', 3], ['c', 5]])
console.log(keysWithMaxValue(map2))
