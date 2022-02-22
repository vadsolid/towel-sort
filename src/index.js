
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let result = []
   if (matrix) {matrix.map((arr, i ) => {
       return (i%2) ? result = result.concat(arr.reverse()) : result = result.concat(arr);
    })}
   return result
}