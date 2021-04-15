class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    _traverse(node) {

    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currNode = this.root;
            while (true) {
                if (value < currNode.value) {
                    if (!currNode.left) {
                        currNode.left = newNode;
                        return this;
                    }
                    currNode = currNode.left;
                } else {
                    if (!currNode.right) {
                        currNode.right = newNode;
                        return this;
                    }
                    currNode = currNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        } 
        
        let currNode = this.root;
        while (currNode) {
            if (value === currNode.value) {
                return currNode;
            } else if (value < currNode.value) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }

        return false;
    }

    delete(value) {
        if (this.root === null) {
            return null;
        } 
        
        let currNode = this.root;
        let previousNode = null;
        let isLeftBranch = false;

        while (true) {
            previousNode = currNode;
            if (value === currNode.value) {
                
                break;
            } else if (value < currNode.value) {                                
                if (currNode.left === null) {
                    if (isLeftBranch) {
                        previousNode.left = currNode.left;                        
                    }
                    return null;
                }                
                currNode = currNode.left;
                isLeftBranch = true;
            } else {
                if (currNode.right === null) {
                    
                    break;
                }
                currNode = currNode.right;
                isLeftBranch = false;
            }
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(20);
bst.insert(1);
bst.insert(6);
bst.insert(15);
bst.insert(170);

console.log(bst);