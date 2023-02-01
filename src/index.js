module.exports = function check(str, bracketsConfig) {

//   const stack = [];
//   const open = bracketsConfig[0];
//   const close = bracketsConfig[1];

//   for (let i = 0; i < str.length; i++) {

//     if (open === '(' || open === '[' || open === '{') {
//       stack.push(str[i]);

//     } else if (close === ')' || close === ']' || close === '}' && !stack.pop()) {
//       return false;
    
//     } else {
//       stack.push(str[i])
//     }

//   return stack.length === 0;

// }

  let open = [];
  let close = [];
  let match;
  let stack = [];

  bracketsConfig.forEach(brackets => {
    open.push(brackets[0]);
    close.push(brackets[1]);
  })

  for (let i = 0; i < str.length; i++) {

    if ((open.indexOf(str[i]) === -1 || stack.indexOf(str[i]) > -1) && close.indexOf(str[i]) > -1) {
      match = open[close.indexOf(str[i])];
      if (stack.length == 0 || (stack.pop() != match)) {
        return false;
      }
    } else {
      stack.push(str[i]);
    }
  }

  return (stack.length == 0);
};