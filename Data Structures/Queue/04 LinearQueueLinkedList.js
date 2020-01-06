class Node {
  constructor(data) {
    this.next = null;
    this.data = data;

  }
}
class LinearQueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enQueue(item) {
    let newNode = new Node(item);
    newNode.next = null;
    if (this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;

    }
  }

  deQueue() {
    if (this.head == null) {
      console.log('Queue is empty');
      return;
    }
    this.head = this.head.next;
  }

  peek() {
    return this.head ? this.head.data : "Queue is empty";
  }

  isEmpty() {
    return this.head == null;
  }

  delete() {
    this.head = this.tail = null;
  }

  print() {
    if (this.head == null) {
      console.log('Queue is empty')
    } else {
      let currentNode = this.head;
      let printStr = "Front--> "
      while (currentNode) {
        printStr += currentNode.data + " ";
        currentNode = currentNode.next;
      }
      console.log(printStr + "<-- Rear")
    }
  }
}

let lql = new LinearQueueLinkedList();
console.log('isEmpty :: ' + lql.isEmpty())
lql.enQueue(10)
lql.enQueue(20)
lql.enQueue(30)
console.log('Peek :: ' + lql.peek())
console.log('isEmpty :: ' + lql.isEmpty())

lql.print()
lql.deQueue();
lql.deQueue();
lql.deQueue();
lql.deQueue();
