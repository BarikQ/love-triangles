/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;

  for(var i = 0; i < preferences.length; i++){
    let condition = preferences[preferences[preferences[i] - 1] - 1] === i + 1;
    if(condition){
      counter ++;
    }
  }
    return (Math.floor(counter/3));
};
