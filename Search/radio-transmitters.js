/**
 * 
 * @param {[number]} x 
 * @param {number} k 
 */
function hackerlandRadioTransmitters(x, k) {
    
    let arrTemp = [];
    let result = [];

    for (let i = 0; i < x.length; i++) {
        result.push(x[i]);
        arrTemp.push(x[i]);
        for (let j = i+1; j < k; j++) {
            if (x[j] - x[i] <= k) {
                arrTemp.push(x[j]);
            } else {
                break;
            }
        }
    }
}

hackerlandRadioTransmitters([2,4,5,6,7,9,11,2], 2);