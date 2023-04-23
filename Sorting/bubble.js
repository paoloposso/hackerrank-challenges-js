
/**
 * 
 * @param {[number]} a 
 */
function countSwaps(a) {

    let totalSwaps = 0;

    for (let i = 0; i < a.length; i++)
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                totalSwaps++;
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }

    console.log(`Array is sorted in ${totalSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);
}

countSwaps([5,6,3,2,8,9]);