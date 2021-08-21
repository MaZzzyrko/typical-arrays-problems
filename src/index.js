exports.min = function min (array) {
    if (array == undefined || array.length < 1) { 
      return 0;
    } else {
      var min = array[0]; array.forEach (num =>  {
        if (num < min) {
          min = num;
        }
      });
  return min;
  }
}

exports.max = function max (array) {
  if (array == undefined || array.length < 1) { 
    return 0;
  } else {
    var max = array[0]; array.forEach (num =>  {
      if (num > max) {
        max = num;  
      }
    });
  
  return max;
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array.length < 1) { 
    return 0;
  } else {
    return array.reduce((index, total) => total + index) / 
    array.length;
  } 
}
