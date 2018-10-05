const myArray = [4,
    8, 4,
   2, 6, 9, 
  8, 5, 9, 3,
 ]
let prePaths = [] 
let paths = []

const isNotPrime = (num) => {
for (let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) return true;
}
return false;
}

const isRaw = (n) => {
if (n === 0 || n === 2 || n === 5 ) {
return true
}
}

const calculate = (array) => {
let sum = 0
let index = 1
for(let i = 0; i <= array.length; i++ ){
if(isNotPrime(array[i])) {
 prePaths.push(array[i], array.slice(i+index, i+index+2))
}
if(isRaw(i)){
     index++ 
}
}
}
calculate(myArray)
const createPaths = () => {
let newEl
let x = 1
for(let i = 0; i <= prePaths.length; i++){
if (isNotPrime(prePaths[i+1][0])) {
paths.push(prePaths[i], prePaths[i+1][0])
newEl = paths[x]
}
i === prePaths.indexOf(newEl)
}
}
console.log(prePaths[1][0])
console.log(prePaths)
createPaths(prePaths)
console.log(paths)

// for(let i = 0; i <= array.length; i++ ){
//  if(isNotPrime(array[i])){
//      console.log(array[i])
//  }
// }