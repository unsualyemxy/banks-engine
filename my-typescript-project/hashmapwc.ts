class Hashmapwc <K extends number,V> {
    private buckets: Array <{key: K, val: V } | null> 
    private size: number
    constructor(size: number = 10){
        this.size = size
        this.buckets = new Array(this.size). fill(null)
    }
        private hash(key: K): number{
        return key % this.size
    }
    set(key: K, val: V): void {
    const idx = this.hash(key)
    this.buckets[idx] = {key, val}
   }

   get(key: K): V | undefined{
    const idx = this.hash(key)
    const entry = this.buckets[idx]
    return entry?.key === key ? entry.val : undefined

   }
   remove(key: K): void{
    const idx = this.hash(key)
    if(this.buckets[idx]?.key === key){
        this.buckets[idx] = null
    }
   }
   
}
