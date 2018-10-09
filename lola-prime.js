const isNotPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return true;
    }
    return false;
    }

  function maximumTrianglePathSum(triangle) {

      function distilLastLine() {
        let lastLine = triangle.pop(),
            aboveLine = triangle.pop()
        for (let i = 0; i < aboveLine.length; i++)
        if(isNotPrime(lastLine[i]) && isNotPrime(lastLine[i + 1])){
          aboveLine[i] = Math.max(
            aboveLine[i] + lastLine[i],
            aboveLine[i] + lastLine[i + 1]
          )
        }else if(isNotPrime(lastLine[i]) && !isNotPrime(lastLine[i + 1]) ) {
          aboveLine[i] = aboveLine[i] + lastLine[i]
        }else if(!isNotPrime(lastLine[i]) && isNotPrime(lastLine[i + 1]) ){
          aboveLine[i] = aboveLine[i] + lastLine[i + 1]
        }
        triangle.push(aboveLine)
      }

      do {
        distilLastLine()
      } while (triangle.length > 1)
      return triangle[0][0]
    }

    // testing
    const myArray = [[1],
    [8, 4],
    [2, 6, 9], 
    [8, 5, 9, 3]]
    let theTriangle = [[215],
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

    console.log(maximumTrianglePathSum(myArray))
    console.log(maximumTrianglePathSum(theTriangle))