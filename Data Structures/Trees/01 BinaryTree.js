class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {

    constructor() {
        this.root = null;
    }

    insert(item) {
        let newNode = new Node(item);

        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        //Left Tree
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode
            else
                this.insertNode(node.left, newNode);
        } else {
            //Right Tree
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    delete(item) {
        this.root = this.deleteNode(this.root, item);
    }

    deleteNode(node, item) {
        //If no nodes
        if (node == null) {
            return null;
        } else if (item < node.data) {
            //if data is < node, move to left
            this.deleteNode(node.left, item);
            return node;
        } else if (item > node.data) {
            //if data is > node, move to right
            this.deleteNode(node.right, item);
            return node;
        } else {
            //If node.data == data

            //Deleting Node with no children
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //Deleting node with single children
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            //Deleting node with two children
            let aux = this.findMinNode(node.right);
            node.data = aux;

            node.right = this.deleteNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left)
        }
    }

    getRoot() {
        return this.root;
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preoder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preoder(node.left);
            this.preoder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}

let binaryTree = new BinaryTree();
binaryTree.insert(15);
binaryTree.insert(25);
binaryTree.insert(10);
binaryTree.insert(7);
binaryTree.insert(22);
binaryTree.insert(17);
binaryTree.insert(13);
binaryTree.insert(5);
binaryTree.insert(9);
binaryTree.insert(27);
let rootNode = binaryTree.getRoot();
console.log('-----In Order-----');
binaryTree.inorder(rootNode);
console.log('-----Pre Order-----');
binaryTree.preoder(rootNode);
console.log('-----Post Order-----');
binaryTree.postorder(rootNode);

    //       15 
    //      /  \ 
    //     10   25 
    //    / \   / \ 
    //   7  13 22  27 
    //  / \    / 
    // 5   9  17  

binaryTree.delete(5);
console.log('-----In Order-----');
binaryTree.inorder(rootNode);

    //       15 
    //      /  \ 
    //     10   25 
    //    / \   / \ 
    //   7  13 22  27 
    //    \    / 
    //     9  17  

binaryTree.delete(7);
console.log('-----In Order-----');
binaryTree.inorder(rootNode);
    //       15 
    //      /  \ 
    //     10   25 
    //    / \   / \ 
    //   9  13 22  27 
    //         / 
    //        17  

binaryTree.delete(15);
console.log('-----In Order-----');
binaryTree.inorder(rootNode);
    //       17 
    //      /  \ 
    //     10   25 
    //    / \   / \ 
    //   9  13 22  27




