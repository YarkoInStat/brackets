module.exports = function check(str, bracketsConfig) {

  const stack = [];
  console.log(str);

  for (let symbol of str) {

    if (symbol === '(' || symbol === '[' || symbol === '{') {
      stack.push(symbol);

    } else if (symbol === ')' || symbol === ']' || symbol === '}') {

      if (!stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;







}