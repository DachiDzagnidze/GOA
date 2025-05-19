
function createStudentMap(list) {
    const map = new Map()
    for (const [name, score] of list) {
        map.set(name, score)
    }
    return map
}

function removeDuplicates(arr) {
    return [...new Set(arr)]
}

function increaseScores(map) {
    const newMap = new Map()
    for (const [name, score] of map) {
        newMap.set(name, score + 5)
    }
    return newMap
}

const students = [
    ['Dachi', 90],
    ['Luka', 85],
    ['Nini', 78]
]
const studentMap = createStudentMap(students)
console.log(studentMap)
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))
console.log(increaseScores(studentMap))
