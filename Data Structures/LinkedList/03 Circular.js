class Node{
    constructor(data){
        this.data=data;
        this.next = null;
    }
}

class CircularLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addatStart(item){
        let node = new Node(item);
        node.next = this.head;
        let first = this.head;

        if(this.head == null){
            node.next = node;
        }else{
            while(first.next != this.head)
                first = first.next;
            
            first.next = node;
        }

        this.head = node;
        this.size++;
    }

    reverse(){
        if(this.head == null)
            return;

        let prev = null;
        let current = this.head;
        let next;
       
        do{
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }while(current != this.head);

        this.head.next = prev;
        this.head = prev;
    }

    print(){
        if(this.head == null){
            console.log("Empty");
            return;
        }

        let first = this.head;
        do{
            console.log(first.data);
            first = first.next;
        }while(first != this.head)
    }
}

let circularLinkedList = new CircularLinkedList();
circularLinkedList.addatStart(10);
circularLinkedList.addatStart(20);
circularLinkedList.addatStart(30);
circularLinkedList.print();
console.log('----------');
circularLinkedList.reverse();
circularLinkedList.print();