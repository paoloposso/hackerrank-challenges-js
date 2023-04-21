let {Tree, Node} = require('./tree');

/**
 * 
 * @param {*} root 
 */
function levelOrder(root) {
    let visited = [root];
    levelOrderRecur(root, visited);

    console.log(visited.map(p => p.data).join(' '));
}

/**
 * 
 * @param {*} item 
 * @param {[]} visited 
 */
function levelOrderRecur(item, visited) {
    if (item.left && !visited.includes(item.left)) {
        visited.push(item.left);
    }
    if (item.right && !visited.includes(item.right)) {
        visited.push(item.right);
    }

    if (item.left) {
        levelOrderRecur(item.left, visited);
    }
    if (item.right) {
        levelOrderRecur(item.right, visited);
    }
}

let head = new Node(1);
head.right = new Node(2);
head.right.right = new Node(5);
head.right.right.left = new Node(3);
head.right.right.right = new Node(6);
head.right.right.left.right = new Node(4);

levelOrder(head)