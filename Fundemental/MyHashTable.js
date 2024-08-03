
// var MyHashMap = function(n) {
//      const arr = Array(n).fill(null)  };
   
//    /** 
//     * @param {number} key 
//     * @param {number} value
//     * @return {void}
//     */
//    MyHashMap.prototype.put = function(key, value) {
//        MyHashMap.a
//    };
   
//    /** 
//     * @param {number} key
//     * @return {number}
//     */
//    MyHashMap.prototype.get = function(key) {
       
//    };
   
//    /** 
//     * @param {number} key
//     * @return {void}
//     */
//    MyHashMap.prototype.remove = function(key) {
       
//    };
   
//    /** 
//     * Your MyHashMap object will be instantiated and called as such:
//     * var obj = new MyHashMap()
//     * obj.put(key,value)
//     * var param_2 = obj.get(key)
//     * obj.remove(key)
//     */




class MyHashMap{
   constructor(n=100000){
      this.arr = Array(n).fill(null).map(() => [] );
      
   }

   hashKey(key){
    return key%this.arr.length ; 
   }
    put(key,value){
      let hash = this.hashKey(key) ;
      for (let pair of this.arr[hash]) {
        if (pair[0] === key) {
            pair[1] = value;
            return;
        }
    }
    this.arr[hash].push([key,value])   ;  
   }

   get(key){
    let hash = this.hashKey(key) ;
    if(this.arr[hash].length >0){
       for( let pair of this.arr[hash] ){
          if(pair[0] === key){
            return pair[1];
          }
       }
        
    }
    return null ; 
   }

   remove(key){
    let hash = this.hashKey(key) ;
    if(this.arr[hash].length >0){
       
      this.arr[hash] = this.arr[hash].filter( (pair) => pair[0]!=key )
      }
   }  
}

hashTable = new MyHashMap(5) ; 
hashTable.put(5,"five");
hashTable.put(4,"four");
hashTable.put(1,"one");
hashTable.put(6,"six");
hashTable.put(11,"eleven");
console.log(hashTable.get(5));  
hashTable.remove(5) ;
console.log(hashTable.get(5));
console.log(hashTable.get(4));
console.log(hashTable.get(1));
console.log(hashTable.get(6));
console.log(hashTable.get(11));

