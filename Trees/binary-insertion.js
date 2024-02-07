

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

/**
 * 
 * @param {string} input 
 */
function processData(input) {
    const inputArray = input.split('\n')[1].split(' ').map(v => parseInt(v));

    if (input.length === 0) return null;

    const head = new Node(inputArray[0]);

    inputArray.slice(1).forEach(value => {
        let cur = head;
        insert(cur, value);
    });

    const result = [];

    traverse(head, result);

    console.log(result.join(' '));
} 

/**
 * 
 * @param {any} cur 
 * @param {string} value 
 */
const insert = (cur, value) => {
    if (value >= cur.data) {
        if (cur.right) {
            return insert(cur.right, value);
        }
        return cur.right = new Node(value);
    } else {
        if (cur.left) {
            return insert(cur.left, value);
        }
        return cur.left = new Node(value);
    }
}

/**
 * 
 * @param {any} head 
 * @param {[number]} result 
 */
const traverse = (head, result) => {
    result.push(head.data);
    if (head.left) {
        traverse(head.left, result);
    }
    if (head.right) {
        traverse(head.right, result);
    }
}
