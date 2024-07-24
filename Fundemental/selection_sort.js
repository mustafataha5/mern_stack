
const select_sort = (a) => {
    let min, temp  ; 
    for(let i = 0 ; i < a.length ; i++){
        min = i ; 
        for(let j = i ; j < a.length ; j++){
            if(a[min] > a[j]){
                min =j;
            }
        }
        temp  =  a[i] ; 
        a[i] = a[min] ; 
        a[min] = temp ; 
    }
    return a ;
}



console.log(select_sort([4,5,8,7,1]));



