abstract class Animal{
    name: string
    constructor(name: string){
        this.name = name;

     }
    abstract  makeSound(): void 

       move(){
console.log("&{this.name}is moving")
}

}
class Dog extends Animal {
    makeSound(): void {
        console.log("woof")
    }
}
   
        
    
   

const bingo = new Dog("Bingo")
bingo.makeSound()