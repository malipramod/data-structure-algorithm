const MAXSIZE = 3;
let stack = [];

function _push(value) {    
    if (stack.length >= MAXSIZE)
        return "Stack is full";
    else
        return stack[stack.push(value) - 1];   
}

function _pop() {
    if (stack.length <= 0)
        return "Stack is empty";
     else   
        return stack.pop();
}
function _peek(){
    return stack.length===0?"Stack is Empty": stack[stack.length-1];
}

function _isEmpty(){
    return stack.length === 0 ? true : false;
}

function _printStack(){
    if(stack.length<=0)
        console.log("Stack is empty");
    stack.forEach((item,index) => console.log(index,"==>",item));
}

function main() {
    console.log("isEmpty --> ",_isEmpty());
    console.log("Pushed --> ",_push(10));
    console.log("Pushed --> ",_push(20));
    console.log("Pushed --> ",_push(30));
    console.log("Pushed --> ",_push(40));
    console.log("isEmpty --> ",_isEmpty());
    console.log("Peek --> ",_peek());    
    _printStack();  
    console.log("Poped --> ",_pop());
    console.log("Poped --> ",_pop());
    console.log("Poped --> ",_pop());
    console.log("Peek --> ",_peek());    
    console.log("Poped --> ",_pop());   
    console.log("isEmpty --> ",_isEmpty());

    _printStack();  

}

main();