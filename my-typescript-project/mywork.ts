//composition
class Computer{
    private cpu: CPU
    private ram: RAM
    private storage: STORAGE
    constructor(){
        this.cpu = new CPU()
        this.ram = new RAM()
        this.storage = new STORAGE
    }
    run():void {
      this.cpu.process()
      this.ram.load()
      this.storage.store()
      console.log("computer is running")}
    start(){
        console.log("computer has started")
    }
}
class CPU {
    process(): void {
    console.log("CPU is processing Data...")
     }
}
class RAM{
    load(): void {
        console.log("RAM is loading Data")
    }
}
class STORAGE{
  store(): void{
       console.log("the STORAGE of Data is successful")
    }

}
 
const computer= new Computer()
computer.run()

//aggregation
class Student {
    name: string;
    constructor(name: string){
        this.name =  name
    }
}


//array
class ArrrayYemi {
    value: string[]
    

}





class stackWithArray<T = number |string>{
    stack:T []
    constructor(){
        this.stack = []
    }
    pop(){
        if (this.isEmpty()) return"this stack is empty to pop!"
        return this.stack.pop()
    }
    push(value:T){
        this.stack.push(value)
    }
    peek(){
        if(this.isEmpty()) return"the stack is empty nothing to peek"
        return this.stack[this.stack.length - 1]
    }
   private  isEmpty(){
        return this.stack.length === 0
    }
}