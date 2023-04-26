
/**
 * 
 * @param {number} k 
 * @param {[number]} arr 
 */
function pairs(k, arr) {
    let total = 0;
    let skip = 1;
    while (skip < arr.length) {
        for (let index = 0; index < arr.length-skip; index++) {
            // console.log(`${arr[index]}-${arr[index+skip]}`);
            const diff = Math.abs(arr[index]-arr[index+skip]);
            // console.log(`${Math.abs(arr[index]-arr[index+skip])}`);
            if (diff === k) {
                total++;
            }
        }

        skip++;
    }

    return total;
}

pairs(2, [1,5,3,4,2]);