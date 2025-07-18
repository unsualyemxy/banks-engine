//class LNODE{
  //  value: number
    //next: LNODE| null

    //constructor(value: number){
      //  this.value = value
        //this.next = null
  //  }
//}


//class linkedlist{
  //  head: LNODE|null

    //constructor(initialValue: number){
      //  const newNode = new LNODE(initialValue)
        //this.head = newNode
    //}

//}

//const list = new linkedlist(10)
//console.log(list)

//doubly linkedlist
class NODE{
    value : string
    next : NODE|null
    prev : NODE|null
    
    constructor(value : string){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doublyLinkedlist{
  head = DoublyLinkedListNode
  tail = DoublyLinkedListNode
}
const lyric = new doublyLinkedlist()
lyric
console.log(lyric)

