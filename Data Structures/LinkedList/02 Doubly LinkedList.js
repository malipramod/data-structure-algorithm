class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    addatStart(item) {
        let node = new Node(item);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++;
    }

    addatEnd(item) {
        let node = new Node(item);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    addAfter(item, index) {
        let node = new Node(item);
        if (index < 0) {
            return;
        } else {
            let currentNode = this.head;
            let tempIndex = 0;
            while (currentNode) {
                if (tempIndex == index) {
                    node.prev = currentNode;
                    node.next = currentNode.next;
                    currentNode.next = node;
                    if (node.next != null)
                        node.next.prev = node;
                    this.size++;
                }
                currentNode = currentNode.next;
                tempIndex++;
            }
        }
    }

    addBefore(item, index) {
        let node = new Node(item);
        if (index <= 0) {
            return;
        } else {
            let tempIndex = 0;
            let currentNode = this.head;
            while (currentNode) {
                if (tempIndex == index) {
                    node.prev = currentNode.prev;
                    currentNode.prev = node;
                    node.next = currentNode;
                    if (node.prev != null)
                        node.prev.next = node;
                    else
                        this.head = node;

                    this.size++;
                }
                tempIndex++;
                currentNode = currentNode.next;
            }
        }
    }

    removefromStart() {
        if (this.head == null) {
            console.log('LinkedList is empty');
        } else {
            let secondNode = this.head.next;
            this.head = secondNode;
            this.size--;
        }
    }

    removefromLast() {
        if (this.head == null) {
            console.log('LinkedList is empty');
        } else {
            let secondLastNode = this.tail.prev;
            secondLastNode.next = null;
            this.tail = secondLastNode;
            this.size--;
        }
    }

    removeAt(index) {
        if (this.head == null || index >= this.size)
            return;

        if (index == 0)
            this.removefromStart();
        else {
            let tempIndex = 1;
            let currentNode = this.head;
            while (currentNode) {
                currentNode = currentNode.next;
                if (currentNode == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                    this.size--;
                } else if (tempIndex == index) {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                    this.size--;
                    break;
                }
                tempIndex++;
            }
        }
    }

    printLinkedList() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log('Length: ', this.size);
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addatStart(20);        //  20
doublyLinkedList.addatStart(10);        //  10 20
doublyLinkedList.addatEnd(25);          //  10 20 25
doublyLinkedList.addatEnd(30);          //  10 20 25 30
doublyLinkedList.addatStart(2);         //  2 10 20 25 30
doublyLinkedList.addAfter(3, 0);        //  2 3 10 20 25 30
doublyLinkedList.addAfter(6, 1);        //  2 3 6 10 20 25 30
doublyLinkedList.addBefore(4, 2);       //  2 3 4 6 10 20 25 30
doublyLinkedList.printLinkedList();     //  2 3 4 6 10 20 25 30

doublyLinkedList.removefromStart();     //  3 4 6 10 20 25 30
doublyLinkedList.removefromStart();     //  4 6 10 20 25 30
doublyLinkedList.removefromLast();      //  4 6 10 20 25
doublyLinkedList.removefromLast();      //  4 6 10 20
doublyLinkedList.printLinkedList();     //  4 6 10 20


doublyLinkedList.removeAt(0);           //  6 10 20
doublyLinkedList.removeAt(1);           //  6 20
doublyLinkedList.removeAt(1);           //  6
doublyLinkedList.removeAt(0);           //  Empty


doublyLinkedList.printLinkedList();     //  Empty
