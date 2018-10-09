const isPrime = (num) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }

let oldArr = [[1],
[8, 4],
[2, 6, 9], 
[8, 5, 9, 3]]


let arr = [[215],
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
[924, 622, 911, 233, 325, 139, 721, 218, 253, 223, 107, 233, 230, 124, 233]]

  
  const calculateSum = (arr) => {
    let row = []
    let end = arr[arr.length -1]
    let rowLen = end.length -1
    for ( let i = 0; i <= rowLen; i++ ) {
      if(isPrime(end[i])){
        end[i] = 0
        row.push(end[i])
      }
    }
      while (arr.length !== 1) {
        let len = arr.length
        let row = []
        let current = arr[len-2]
        let currentLen = current.length - 1
        end = arr[len-1]
        for ( let i = 0; i <= currentLen; i++ ) {
          if(isPrime(current[i])){
              current[i] = 0 
              row.push(current[i])
          }else {
              row.push(Math.max(current[i] + end[i] || 0, current[i] + end[i+1] || 0) )
          }
        }
       
        arr.pop();
        arr.pop();
       
        arr.push(row);
      }
      return arr
  }
  
     
    console.log(calculateSum(oldArr))
    console.log(calculateSum(arr))