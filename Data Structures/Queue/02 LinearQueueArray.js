class LinearQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = -1;
    this.rear = -1;
  }

  enQueue(item) {
    if (this.isFull()) {
      console.log('Queue is full')
      return;
    }
    this.rear++;
    this.queue[this.rear] = item;
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log('Queue is empty')
    }
    this.front++;
    this.queue.splice(this.front, 1)
  }

  peek() {
    return this.isEmpty() ? "Queue is empty" : this.queue[this.front + 1]
  }
  deleteQueu() {
    this.queue = [];
  }

  isFull() {
    return this.rear >= this.maxSize - 1;
  }
  isEmpty() {
    return this.front == this.rear;
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

let lq = new LinearQueue(5);
lq.print()
console.log("Peek :: " + lq.peek())
lq.enQueue(10)
lq.enQueue(20)
lq.enQueue(30)
console.log("Peek :: " + lq.peek())
lq.enQueue(40)
lq.enQueue(50)
lq.enQueue(60)
lq.print()
lq.deQueue()
lq.print()
lq.enQueue(60)
console.log("Peek :: " + lq.peek())
lq.print()
