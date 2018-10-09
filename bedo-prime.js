const isPrime = (num) => {
  for (let i = 2; i*i <= num; i++) {
      if (num % i === 0) return false;
  }    
  return num !== 1;
}

function maximumTrianglePathSum(triangle){
  if(triangle === undefined || triangle.length === 0 || triangle[0].length === 0 || isPrime(triangle[0][0])){
      return 0;
  }
  let sum_values = createEmptyTriangleStructure(triangle);
  for(let k = triangle.length - 1;k >= 0;--k){
      let currentLine = triangle[k];
      for (let i = 0; i < currentLine.length; i++){
          let curr_value = currentLine[i];
          if(isPrime(curr_value)){
              sum_values[k][i] = 0;
          }else if(k === triangle.length - 1){
              sum_values[k][i] = currentLine[i];   
          }else{
              if(i !== 0){
                  sum_values[k][i] = Math.max(sum_values[k][i],curr_value + sum_values[k + 1][i-1]); // left down diagonal
              }                
              sum_values[k][i] = Math.max(sum_values[k][i],curr_value + Math.max(sum_values[k + 1][i],sum_values[k + 1][i + 1]));// check with down value as well as right down diagonal
          }
      }
  }

  return sum_values[0][0];
}

function createEmptyTriangleStructure(triangle){
  let sum = [];
  for(let i=0;i < triangle.length; ++ i){
      sum[i] = [];
      for(let j = 0;j < triangle[i].length; ++ j){
          sum[i][j] = 0;
      }
  }
  return sum;
}

const myArray = [
                  [1],
                  [8, 4],
                  [2, 6, 9], 
                  [8, 5, 9, 3]
              ];
let theTriangle = [
                      [215],
                      [193, 124],
                      [117, 237, 442],
                      [218, 935, 347, 235],
                      [320, 804, 522, 417, 345],
                      [229, 601, 723, 835, 133, 124],
                      [248, 202, 277, 433, 207, 263, 257],
                      [359, 464, 504, 528, 516, 716, 871, 182],
                      [461, 441, 426, 656, 863, 560, 380, 171, 923],
                      [381, 348, 573, 533, 447, 632, 387, 176, 975, 449],
                      [223, 711, 445, 645, 245, 543, 931, 532, 937, 541, 444],
                      [330, 131, 333, 928, 377, 733, 17, 778, 839, 168, 197, 197],
                      [131, 171, 522, 137, 217, 224, 291, 413, 528, 520, 227, 229, 928],
                      [223, 626, 34, 683, 839, 53, 627, 310, 713, 999, 629, 817, 410, 121],
                      [924, 622, 911, 233, 325, 139, 721, 218, 253, 223, 107, 233, 230, 124, 233]
                  ];

console.log(maximumTrianglePathSum(myArray));
console.log(maximumTrianglePathSum(theTriangle));