class StackNode<T>{
    value:T;
    next: StackNode<T>| null;
    constructor(value: T){
        this.value = value;
        this.next = null;
    }
}
class Stack<T>{
    top: StackNode<T>|null;
    bottom: StackNode<T>|null;
    private length: number
    constructor(){
        this.top= null;
        this.bottom=null;
        this.length= 0
    }
    push(value: T){
        const newNode= new StackNode(value)
        if(this.isEmpty()){
            this.bottom = newNode;
            this.top = newNode;
            this.length++
        }else{
            const holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
            this.length++
        }

    }
    peek(){
        if(this.isEmpty())"return "
            return this.top?.value
    }
    pop(){
        if(this.isEmpty()) return"nothing to pop, stack is empty"
        //store the popped node
        const popNode = this.top
        //change this.top to point to the next node
        this.top = this.top?.next ||null
        //if there is no this.top, set this.bottom to null
        if(!this.top){
            this.bottom = null;
        }
        // reduce the length
        this.length--
        //return the popNode
        return popNode
    }
    isEmpty(){
        return this.length===0
    }
}
const myStack = new Stack<number>()
myStack.push(10)
myStack.push(20)
myStack.push(30)

console.log(myStack)
console.log("peeking before popping", myStack.peek())
myStack.pop()
console.log(myStack)


