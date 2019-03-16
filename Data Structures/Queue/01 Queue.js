class Queue {
    constructor(maxSize) {
        this.rear = 0;
        this.front = 0;
        this.maxSize = maxSize;
        this.queue = [];
    }

    isEmpty() {
        return this.queue.length == 0 ? true : false;
    }

    isFull() {
        return this.queue.length == this.maxSize? true : false;
    }

    enQueue(item) {
        if (this.isFull()) {
            console.log(`Queue is full`);
            return;
        }
        this.queue.push(item);
        console.log(`Added ${item}`);
        this.rear++;
    }

    deQueue() {
        if (this.isEmpty()) {
            console.log(`Queue is Empty`);
            return;
        }
        let item = this.queue.splice(0, 1);
        console.log(`Removed ${item}`);
        this.front++;
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log(`Queue is empty`);
            return;
        }        
        console.log(' ----------');
        this.queue.forEach((item, index) => console.log(`| ${index} ==> ${item} |`));
        console.log(' -----------');
    }
}

const queue = new Queue(3);
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
queue.enQueue(40);

queue.printQueue();
queue.deQueue();
queue.deQueue();
queue.printQueue();
queue.deQueue();
queue.enQueue(40);
queue.printQueue();
queue.deQueue();
queue.printQueue();

