/**
 * 
 * @param {number} n 
 * @param {string} s 
 */
function substrCount(n, s) {

  let count = 0;

  let arr = s.split('');

  for (let size = 2; size <= s.length; size++) {
    for (let i = 0; i <= s.length - size; i++) {
      if (isSpecial(arr.slice(i, i+size))) {
        count++;
      }
    }
  }

  count += n;
  return count;
}

/**
 * 
 * @param {[string]} s 
 * @returns 
 */
function isSpecial(s) {
    if (s.length % 2 === 1) {
        s = s.slice(0, s.length / 2).concat(s.slice((s.length / 2)+1));
    }

    if (allCharsSame(s)) return true;

    return false;
}

/**
 * 
 * @param {[string]} str 
 * @returns 
 */
function allCharsSame(str) {
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== str[0]) {
        return false;
      }
    }
    return true;
}

console.log(substrCount(4, 'aaaa') == 10);
console.log(substrCount(5, 'asasd') == 7);