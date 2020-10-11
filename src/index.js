
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == ''||matrix == null) {
        return [];
    } else {     
      return matrix.flatMap((elem, index) => {if(index%2!==0){elem.reverse()} return elem;});                 
    }
  
}

