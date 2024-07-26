

const merge = (arr,beg,med,end) => {

    let i ,k ,j  ; 

    let n1 = med-beg +1 ; 
    let n2 = end-med ; 

    let left = [] ; 
    let right = []  ;
    //console.log(beg+" <> "+med+" <> "+end);    
    for(let l=0 ; l< n1 ; l++){
        left.push(arr[beg+l]);
    }
    for (let t=0 ; t< n2; t++){
        right.push(arr[med+1+t]);
    }

    // console.log(">>>>> left "+left);
    // console.log(">>>>> right "+right);
    // console.log("----------------");
    i=0 ; 
    j = 0 ; 
    k = beg ; 

    while(i < n1 && j < n2){
        if(left[i] < right[j]){
            arr[k] = left[i] ;
            i++ ; 
        }
        else {
            arr[k] = right[j] ;
            j++ ;  
        }
        k++ ; 
    }

    while(i< n1){
        arr[k] = left[i] ;
            i++ ; 
            k++ ; 
    }
    while(j< n2){
        arr[k] = right[j] ;
            j++ ; 
            k++ ; 
    }
    //console.log("Arr "+arr);
}

const mergeSort = (arr,beg,end) => {

    if(beg < end){
        let med = Math.floor((beg+end)/2) ; 
        mergeSort(arr,beg,med); 
        mergeSort(arr,med+1,end);
        merge(arr,beg,med,end);
    }

}


arr = [5,6,7,8,2,4,10,1]
console.log("before" + arr)
mergeSort(arr,0,arr.length-1); 
console.log("after" + arr)





