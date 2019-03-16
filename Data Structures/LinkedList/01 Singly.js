class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addatIndex(item, index) {
        //If index >0 and index is size of linked list return
        if (index > 0 && index > this.getSize()) {
            console.log(`${index} is out of bound(${this.getSize()})`);
            return;
        } else {            
            let node = new Node(item);
            //If insert at starting
            if (index == 0) {
                this.addatStart(node);
            } else {
                //Temp index
                let tempIndex = 0;
                //Current node
                let currentNode = this.head;
                //previous node
                let prevNode = this.head;

                //While we find the index
                while (tempIndex < index) {
                    tempIndex++;
                    prevNode = currentNode;
                    currentNode = currentNode.next;
                }
                //Once found set node's next as current node and privious node's next as it self
                node.next = currentNode;
                prevNode.next = node
            }
            this.size++;
        }
    }

    addatEnd(item) {
        let node = new Node(item);
        let current;

        //If linkedlist is empty
        if (this.head == null) {
            this.head = node;
        } else {
            //if linkedlist contains some values
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    addatStart(item) {
        let node = new Node(item);

        //If linkedlist is empty
        if (this.head == null) {
            this.head = node;
        } else {
            //if linkedlist contains some values, replace start with new node
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    removeatIndex(index) {
        if (index >= this.getSize() && index > 0) {
            console.log(`${index} is out of bound(${this.getSize()})`);
            return;
        }else{
            if(index ==0){
                this.removeatStart();
            }else{
                let tempIndex=0;
                let currentNode = this.head;
                let prevNode =this.head;
                while (tempIndex < index) {
                    tempIndex++;
                    prevNode = currentNode;
                    currentNode = currentNode.next;
                }
                prevNode.next = currentNode.next;
            }
            this.size--;
        }
    }

    removeElement(item){
        if(this.getSize()<=0){
            return;
        }else{
            let curretnNode = this.head;
            let prevNode = null;
            while (curretnNode != null) {
                if(curretnNode.data == item){
                    if(prevNode == null){
                        this.head = curretnNode.next;
                    }else{
                        prevNode.next = curretnNode.next;
                    }
                }
                prevNode = curretnNode;
                curretnNode = curretnNode.next;
            }
            this.size--;
        }
    }
    removeatStart() {
        if (this.head == null) {
            console.log('Linked List is empty');
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    removeatEnd() {
        if (this.head == null) {
            console.log('Linked List is empty');
            return;
        }

        if (this.head.next == null)
            this.head = null;

        let secondLast = this.head;
        while (secondLast.next.next != null) {
            secondLast = secondLast.next;
        }
        secondLast.next = null;

        this.size--;
    }


    printLinkedList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
        console.log('Length:', this.getSize());
    }

    getSize() {
        return this.size;
    }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.addatEnd(10);
singlyLinkedList.addatStart(7);
singlyLinkedList.addatEnd(20);
singlyLinkedList.addatStart(5);
singlyLinkedList.addatIndex(6, 1);
singlyLinkedList.addatIndex(15, 17);

singlyLinkedList.printLinkedList();

singlyLinkedList.removeatStart();
singlyLinkedList.removeatEnd();
singlyLinkedList.printLinkedList();
singlyLinkedList.removeatIndex(4);
singlyLinkedList.removeElement(10);

singlyLinkedList.printLinkedList();