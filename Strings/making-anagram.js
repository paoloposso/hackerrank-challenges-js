/**
 * 
 * @param {string} a 
 * @param {string} b 
 */
function makeAnagram(a, b) {
    const map1 = createMap(a);
    const map2 = createMap(b);

    let result = 0;

    result += countDifferences(map1, map2);
    
    for (let k in map2) {
        if (!map1[k]) {
            result += map2[k];
        }
    }

    return result;
}

function countDifferences(map1, map2) {
    let result = 0;

    for (let key in map1) {
        const qtdMap1 = map1[key];
        const qtdMap2 = map2[key];

        if (!qtdMap2) {
            result += qtdMap1;
        } else {
            result += Math.abs(qtdMap1 - qtdMap2);
        }
    }

    return result;
}

function createMap(str) {
    const result = {};

    str.split('').sort().forEach(elem => {
        if (!result[elem])
            result[elem] = 1;
        else
            result[elem]++;
    });

    return result;
}

makeAnagram('cde', 'abc');