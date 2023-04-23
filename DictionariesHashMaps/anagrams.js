

/**
 * 
 * @param {string} s 
 */
function sherlockAndAnagrams(s) {
    let total = 0;

    const checkPerSize = (s, size) => {
        let dict = {};
    
        for (let i = 0; i < s.length; i++) {
            let curr = s.slice(i, i + size).split('').sort().join('');
            if (!dict[curr]) dict[curr] = 1;
            else {
                total += dict[curr];
                dict[curr]++;
            }
        }
    }

    for (let size = 1; size < s.length; size++) {
        checkPerSize(s, size);
    }
    return total;
}

console.log(sherlockAndAnagrams('ifailuhkqq'));