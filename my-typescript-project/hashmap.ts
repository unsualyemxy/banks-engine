class listNode<k,v>{
     key: k
     val: v
     next: listNode<k,v> | null

     constructor(key: k, val:v, next: listNode<k,v> | null){
        this.key = key
        this.val = val
        this.next = next
     }
}

class HashMap<k,v>{
    private buckets: Array<listNode<k,v> | null>
    private size: number

    constructor(size: number = 10){
        this.size = size
        this.buckets = new Array(this.size).fill(null)
    }
    private hash(key: k): number{
        const strk = String(key)
        let hash = 0

        for(let i = 0; i< strk.length; i++){
            hash = (hash + strk.charCodeAt(i) * i) % this.size
        }
        return hash
    }

    set(key:k, val: v): void{
        const idx = this.hash(key)
      let head = this.buckets[idx]

        let curr = head 

        while(curr){
            if(curr.key == key){
                curr.val = val
                return
            }
            curr = curr.next
        }
        let newNode = new listNode(key, val, head)
        this.buckets[idx] = newNode
    
    }
    get (key: k): v | undefined{
        const idx=this.hash(key)
        let curr = this.buckets[idx]

        while (curr){
            if(curr.key == key){
                return curr.val
            }
            curr = curr.next
        }
        return
    }
    remove(key:k): void{
        const idx = this.hash(key)
        let curr = this.buckets[idx]
        let prev: listNode <k,v> | null = null
        while(curr){
            if(curr.key == prev){
               if(prev){
                prev.next = curr.next
               }else{
                this.buckets[idx] = curr.next
               }
               return
            }
            prev = curr
            curr = curr.next
        }
        return
    }
}