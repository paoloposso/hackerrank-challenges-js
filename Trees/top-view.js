/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/


function inOrder(root) {
    let result = [];
    inOrderRecur(root, result);

    console.log(result.join(' '));
}

/**
 * 
 * @param {*} item 
 * @param {[]} result 
 * @returns 
 */
function inOrderRecur(item, result) {

    if (!item) return;

    result.push(item.data)
    inOrderRecur(item.right, result)
}

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

let head = new Node(1);
head.right = new Node(3);
head.right.left = new Node(4);
head.right.right = new Node(5);

inOrder(head);