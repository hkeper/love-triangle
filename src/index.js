/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0; 
  let value, value1, value2;
  for (var i = 0; i < preferences.length; i++){
    value = preferences[i] - 1;
    if (value == i) continue
      value1 = preferences[value] - 1;
      if (value == value1) continue
        value2 = preferences[value1] - 1;
        if (value2 == value1) continue
          if (value2 == i) {
            count++;
          }
  } 
 return count / 3;
};
