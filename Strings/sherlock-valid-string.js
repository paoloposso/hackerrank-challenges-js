
/**
 * 
 * @param {string} s 
 */
function isValid(s) {
    const frequencyMap = createMapOfFrequencies(s);

    let valuesArr = [...frequencyMap.values()];

    let standardFrequency = valuesArr[0];

    valuesArr = valuesArr.filter((val, index) => valuesArr.indexOf(val) !== index);

    if (valuesArr.length > 0) {
        standardFrequency = valuesArr[0];
    } 

    let numberOfRemovals = 0;

    for (let [key, value] of frequencyMap.entries()) {
        if (standardFrequency !== 1 && value === 1) {
            numberOfRemovals++;
        }
        else if (Math.abs(value - standardFrequency) >= 1) {
            const diff = Math.abs(value - standardFrequency);
            numberOfRemovals += diff;
            frequencyMap[key] -= diff;
        }

        if (numberOfRemovals > 1) {
            return "NO";
        }
    }

    return "YES";
}

/**
 * 
 * @param {string} str 
 * @returns 
 */
function createMapOfFrequencies(str) {
    const result = new Map();

    let s = str.split('').sort();

    while (s.length > 0) {
        let currentChar = s[0];
        let frequency = s.filter(val => val === currentChar).length;

        result.set(currentChar, frequency);

        s = s.filter(val => val !== currentChar);
    }

    return result;
}

console.log(isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'))