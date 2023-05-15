/*Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>
for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.
*/


const uncompress = (s) => {
  let result = [];;
  let i = 0;
  let j = 0; 
  while (j < s.length) {
    if (!isNaN(Number(s[j]))) {
      j++;
    } else {
      let currentNum = Number(s.slice(i, j));
      result.push(s[j].repeat(currentNum))
      j++;
      i = j;
    }
  }
  return result.join('');
};

module.exports = {
  uncompress,
};

/*
n = number of groups
m = max num found in any group
Time: O(n*m)
Space: O(n*m)
*/

uncompress("2c3a1t"); // -> 'ccaaat'