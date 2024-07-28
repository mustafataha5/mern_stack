




const partion_1 = (arr,beg,end) => {

    const pivot = arr[end];
    let i = beg - 1;
    //$("#textArea3").append("Pivot "+pivot+'\n'); 
    for (let j = beg; j < end; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}  




const partion_2 = (arr,beg,end) => {

    const pivot = arr[Math.floor((beg+end)/2)];
   // $("#textArea2").append("Pivot "+pivot+'\n');
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


const partion_3 = (arr, beg, end) => {
    const pivot = arr[beg];
    $("#textArea4").append("Pivot "+pivot+'\n');
    let i = beg + 1; // start right after the pivot
    for (let j = beg + 1; j <= end; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[beg], arr[i - 1]] = [arr[i - 1], arr[beg]]; // place pivot in correct position
    return i - 1; // return the pivot index


};

const QuickSort_1 = (arr,beg,end)=> {
    if(beg < end ){
        pIndex = partion_1(arr,beg,end) ; 
      //  $("#textArea3").append("  beg: "+beg+ " end: "+end+"\n\n");
        //$("#textArea3").append("  >>> "+arr+"\n\n");
        QuickSort_1(arr,beg,pIndex-1);
        QuickSort_1(arr,pIndex+1,end) ; 
    }

}

const QuickSort_2 = (arr,beg,end)=> {
    if(beg < end ){
        pIndex = partion_2(arr,beg,end) ;
       // $("#textArea2").append("  >>> "+arr+"\n\n");
        QuickSort_2(arr,beg,pIndex);
        QuickSort_2(arr,pIndex+1,end) ; 
    }
}

const QuickSort_3 = (arr,beg,end)=> {
    if(beg < end ){
        pIndex = partion_3(arr,beg,end) ;
        $("#textArea4").append("  >>> "+arr+"\n\n");
        QuickSort_3(arr,beg,pIndex-1);
        QuickSort_3(arr,pIndex+1,end) ; 
    }

}


$(document).ready(() => {
    $('#btn2').click(
        () => {
            let arr = $("#textArea1").val().split(",").map( (num) => parseInt(num)); 
            // console.log(arr);
            $("#textArea2").text(arr+'\n');
            const start = performance.now();
            QuickSort_2(arr,0,arr.length-1);
            const end = performance.now();
            $("#ex2").text(`\nExecution time: ${end - start} ms`)
            // console.log(`Execution time: ${end - start} ms`);
            adjustTextareaHeight(  $("#textArea2"));
        }
    );

    $('#btn3').click(
        () => {
            let arr = $("#textArea1").val().split(",").map( (num) => parseInt(num)); 
             console.log(arr);
            $("#textArea3").text(arr+'\n');
            const start = performance.now();
            QuickSort_1(arr,0,arr.length-1);
            const end = performance.now();
            $("#ex3").text(`\nExecution time: ${end - start} ms`)
            // console.log(`Execution time: ${end - start} ms`);
            adjustTextareaHeight(  $("#textArea3"));
        }
    );

    $('#btn_start').click(
        () => {
            let arr = $("#textArea1").val().split(",").map( (num) => parseInt(num)); 
             console.log(arr);
            $("#textArea4").text(arr+'\n');
            const start = performance.now();
            QuickSort_3(arr,0,arr.length-1);
            const end = performance.now();
            $("#ex4").text(`\nExecution time: ${end - start} ms`)
            // console.log(`Execution time: ${end - start} ms`);
            adjustTextareaHeight(  $("#textArea4"));
        }
    );
});

function adjustTextareaHeight(textarea) {
    textarea.css('height', 'auto');
    textarea.css('height', textarea[0].scrollHeight + 'px');
}

// let { performance } = require('perf_hooks');
// const start = performance.now();

// console.log("before : "+arr) ;
// let arr_1 = [...arr]
// QuickSort_1(arr_1,0,arr.length-1); 
// console.log("after using Pivot Rigth : "+arr_1) ; ;
// console.log(`This took ${performance.now() - start} milliseconds to run`);


// console.log('----------------------------')
// const start1 = performance.now();

// let arr_2 = [...arr]
// console.log("before : "+arr_2) ;

// QuickSort_2(arr_2,0,arr.length-1); 
// console.log("after using Pivot Med : "+arr_2) ; ;
// console.log(`This took ${performance.now() - start1} milliseconds to run`);


// console.log('----------------------------')

// const start2 = performance.now();
// console.log("before : "+arr_2) ;

// QuickSort_2(arr_2,0,arr.length-1); 
// console.log("after using Pivot Med (Sorted array) : "+arr_2) ; ;
// console.log(`This took ${performance.now() - start2} milliseconds to run`);