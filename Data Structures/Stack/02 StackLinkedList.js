class Node{
	constructor(data){
			this.value = data;
			this.next = null;
	}
}

class LinkedListStack{
	constructor(){
		this.head = null;	
	}
	
	push(item){
		let newNode = new Node(item);
		if(this.head==null){
			this.head = newNode
			return;		
		}
		
		newNode.next = this.head;
		this.head = newNode;
	}
	
	pop(){
		if(this.isEmpty()){
			console.log('Underflow')
			return;
		}
		
		this.head = this.head.next;
	}
	isEmpty(){
		return this.head==null;
	}
	
	peek(){
		return this.head?this.head.value:'Stack is empty';
	}
	
	print(){
		let currentNode = this.head;
		let printStr = 'Top--> ';
		while(currentNode){
			printStr += currentNode.value+" ";
			currentNode = currentNode.next;
		}
		console.log(printStr)
	}
}

let lls = new LinkedListStack();
console.log('Peek -->'+lls.peek())
console.log('isEmpty -->'+lls.isEmpty())
lls.pop()
lls.push(10)
lls.push(20)
lls.push(30)
console.log('Peek -->'+lls.peek())
console.log('isEmpty -->'+lls.isEmpty())
lls.print()
lls.pop()
lls.pop()
console.log('Peek -->'+lls.peek())
console.log('isEmpty -->'+lls.isEmpty())
lls.print()
