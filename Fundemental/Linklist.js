


class Node{
    constructor(data){
        this.data = data  ; 
        this.next = null ; 
    }
}

class LinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
    }
    add(data){
        let newNode = new Node(data) ; 
        if(!this.head){
            this.head =  newNode ; 
            this.tail = newNode ; 
        }
        else{
            this.tail.next = newNode ; 
            this.tail = newNode ; 
        }
        this.length++ ; 
        return this.head ; 
    }

    printAll(){
        let temp = this.head ; 
        let str = "" ; 
        while(temp){
            str += temp.data+"  --> " ;
            temp = temp.next ; 
        }
        str += "Null" ; 
        console.log(str);
    }

    sort(){
        let list = new LinkedList() ; 
        let temp = this.head ; 
        let current = this.head ; 
        while(temp){
            if(!list.head){
                list.head = current ;
                list.tail = current ;  
                temp = current.next;
                current.next = null ; 
            }
            else{
                current = temp ; 
                temp = temp.next ;
                current.next = null ; 
                let temp1 = list.head ; 
                let prev = null ; 
                while(temp1 && temp1.data < current.data){
                    prev = temp1 ; 
                    temp1 = temp1.next ; 
                }
                
                if(prev===null){
                    //console.log(prev+"  "+current.data); 
                    current.next = list.head ; 
                    list.head = current ; 
                  //  list.printAll()
                }
                else{
                    //console.log(prev.data+"  "+current.data); 
                current.next = prev.next ; 
                prev.next = current ;} 
            } 
        }

        this.head = list.head ; 
    }

 }


const list = new LinkedList() ; 

for(let i= 0 ; i< 10 ; i ++){
    list.add(Math.floor(Math.random()*100)); 
}
// list.add(99);
// list.add(67);
// list.add(32);
// list.add(35);
// list.add(39);
// list.add(26);
list.printAll();
console.log("-------------------  After Sorted");
list.sort(); 
list.printAll();