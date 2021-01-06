export const arr: Array<number | string | boolean> = [1,'two', true]

const nums = [1,2,3]

console.log(nums)

console.log(arr)

function logScores(name: string, ...scores: number[]) {
    console.log(`${name} got these scores ${scores}`)
}

logScores('Bob', 1,2,3)

const benScores: [string, ...number[]] = ['Ben', 50, 75, 85]

const tomScore: {name: string, score: number[]} = {name: "Bob", score: [1,2,3]}

tomScore.score = [2,3,4]