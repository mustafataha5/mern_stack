




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

const QuickSort_1 = (arr,beg,end)=> {
    if(beg < end ){
        pIndex = partion_1(arr,beg,end) ; 
        QuickSort_1(arr,beg,pIndex);
        QuickSort_1(arr,pIndex+1,end) ; 
    }

}

const QuickSort_2 = (arr,beg,end)=> {
    if(beg < end ){
        pIndex = partion_2(arr,beg,end) ; 
        QuickSort_2(arr,beg,pIndex);
        QuickSort_2(arr,pIndex+1,end) ; 
    }

}



arr = [2,5,6,7,1];

let { performance } = require('perf_hooks');
const start = performance.now();

console.log("before : "+arr) ;
let arr_1 = [...arr]
QuickSort_1(arr_1,0,arr.length-1); 
console.log("after using Pivot Rigth : "+arr_1) ; ;
console.log(`This took ${performance.now() - start} milliseconds to run`);


console.log('----------------------------')
const start1 = performance.now();

let arr_2 = [...arr]
console.log("before : "+arr_2) ;

QuickSort_2(arr_2,0,arr.length-1); 
console.log("after using Pivot Med : "+arr_2) ; ;
console.log(`This took ${performance.now() - start1} milliseconds to run`);


console.log('----------------------------')

const start2 = performance.now();
console.log("before : "+arr_2) ;

QuickSort_2(arr_2,0,arr.length-1); 
console.log("after using Pivot Med (Sorted array) : "+arr_2) ; ;
console.log(`This took ${performance.now() - start2} milliseconds to run`);