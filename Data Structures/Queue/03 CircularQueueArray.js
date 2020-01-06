class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = new Array(maxSize).fill(null);
    this.front = -1;
    this.rear = -1;
  }

  enQueue(item) {
    if (this.isFull()) {
      console.log('Queue is full')
      return;
    } else if (this.front == -1) {
      this.front = this.rear = 0;
      this.queue[this.rear] = item;
    } else if (this.rear == this.maxSize - 1 && this.front != 0) {
      this.rear = 0;
      this.queue[this.rear] = item;
    } else {
      this.rear++;
      this.queue[this.rear] = item;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log('Queue is empty')
    }
    this.queue[this.front] = null;
    if (this.front == this.rear) {
      this.front = this.rear = -1;
    } else if (this.front == this.maxSize - 1) {
      this.front = 0;
    } else {
      this.front++;
    }
  }

  peek() {
    return this.isEmpty() ? "Queue is empty" : this.queue[this.front + 1]
  }
  deleteQueu() {
    this.queue = [];
  }

  isFull() {
    return (this.front == 0 && this.rear == this.maxSize - 1) || (this.rear == (this.front - 1) % (this.maxSize - 1))
  }
  isEmpty() {
    return this.front == -1;
  }

  print() {
    if (this.isEmpty()) {
      console.log('Queue is empty')
      return;
    }
    let printStr = 'Front --> ';
    this.queue.forEach(q => printStr += q + " ");
    console.log(printStr + "<--Rear")
  }
}

let cq = new CircularQueue(5);
cq.enQueue(10)
cq.enQueue(20)
cq.enQueue(30)
cq.enQueue(40)
cq.enQueue(50)
cq.enQueue(60)
cq.deQueue()
cq.deQueue()
cq.deQueue()
cq.enQueue(60)
cq.enQueue(70)
cq.enQueue(80)
cq.enQueue(90)
cq.print();
