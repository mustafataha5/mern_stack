




const partion_1 = (arr,beg,end) => {

    const pivot = arr[end];
    let i = beg - 1;
    
    for (let j = beg; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}  

const partion_2 = (arr,beg,end) => {

    const pivot = arr[Math.floor((beg+end)/2)];
    let i = beg - 1;
    let j = end +1 ; 
    
    while(true){

        do{
            i++ ; 
        }while(arr[i] < pivot ) ; 

        do{
            j-- ; 
        }while(arr[j]> pivot) ; 
        if(i>=j){
            // console.log(arr+"out P: "+pivot+` i: ${i} j: ${j}`);
            return j ; 
        }
        // console.log("p: "+pivot+` i: ${i} j: ${j}`);
        // console.log(">>>>"+arr);
        [arr[i],arr[j]] = [arr[j],arr[i]];
        // console.log("<<<"+arr);
        // console.log("--------");
    } 

}  


const QuickSort = (arr,beg,end)=> {
    if(beg < end ){
        pIndex = partion_2(arr,beg,end) ; 
        QuickSort(arr,beg,pIndex);
        QuickSort(arr,pIndex+1,end) ; 
    }

}

arr = [2,5,6,7,1];
console.log("before : "+arr) ; 
QuickSort(arr,0,arr.length-1); 
console.log("after : "+arr) ; 



