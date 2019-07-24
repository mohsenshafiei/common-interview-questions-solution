const isPalindrome = (str) => {
  let result = true;
  let temp = `${str}`;
  while (temp.length > 1) {
    if (temp[0] === temp[temp.length - 1]) {
      temp = temp.slice(1, temp.length - 1);
    } else {
      result = false;
      break;
    }
  }
  return result;
}

console.log(isPalindrome('nan'));
console.log(isPalindrome('anana'));
console.log(isPalindrome('anan'));
console.log(isPalindrome('nana'));
console.log(isPalindrome('nana'));
console.log(isPalindrome('kiik'));
