/**
 * 
 * @param {string} input 
 */
function processData(input) {
    let inputArr = input.split('\n').slice(1);

    let resultArr = [];

    inputArr.map(p => {
        const item = p.split(' ');
        resultArr.push({name: item[0], score: item[1]})
    });

    resultArr = resultArr.sort((a, b) => {
        if (b.score === a.score) {
            return a.name.localeCompare(b.name);
        }

        return b.score - a.score;
    });

    const result = resultArr.map(item => {
        // console.log(`${item.name} ${item.score}`);
        return `${item.name} ${item.score}`;
    });

    console.log(result.join('\n'));
}

processData('5\namy 100\ndavid 100\nheraldo 50\naakansha 75\naleksa 150')