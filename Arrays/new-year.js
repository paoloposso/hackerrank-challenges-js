/**
 *
 * @param {[number]} q
 */
function minimumBribes(q) {
    let totalSwaps = 0;

    totalSwaps = bubbleSort(q, q.length, totalSwaps);

    if (totalSwaps < 0) {
        console.log("Too chaotic");
    } else {
        console.log(totalSwaps);
    }
}

/**
 *
 * @param {[]} q
 * @param {number} start
 * @param {number} totalSwaps
 * @returns
 */
function bubbleSort(q, end, totalSwaps) {

    if (end === 0) return totalSwaps;

    let s = {};

    for (let i = 0; i < end - 1; i++) {
        if (q[i] > q[i+1]) {
            if (!s[q[i]]) s[q[i]] = 0;
            s[q[i]]++;
            
            if (s[q[i]] > 2) {
                return -1;
            }

            [q[i], q[i + 1]] = [q[i + 1], q[i]];
            totalSwaps++;
        }
    }

    return bubbleSort(q, end-1, totalSwaps);
}

// minimumBribes([1,2,3,5,4,6,7,8]);
// minimumBribes([3,2,1]);
// minimumBribes([2,5,1,3,4]);
// minimumBribes('');

let a = require('./input06.txt').replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));
