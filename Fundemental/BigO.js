Number.prototype.isPrime = function() {
        for( let i=2; i<this; i++ ) {
            if( this % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    
Number.prototype.isPrime_inhance = ()=> {
    if( this > 2 && this %2 == 0){
        return false ;
    }
    for( let i=2; i<this/2; i++ ) {
                if( this % i === 0 ) {
                    return false;
                }
            }
            return true;
}
let { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


 let start1 = performance.now();
 primeCount = 0;
 num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime_inhance() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1} with inhance`);
console.log(`This took ${performance.now() - start1} milliseconds to run`);

let start2 = performance.now();
 primeCount = 0;
 num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e5 ) {
    if( num.isPrime_inhance() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num-1} with inhance`);
console.log(`This took ${performance.now() - start2} milliseconds to run`);

// recursive
let start3 = performance.now();
 primeCount = 0;

function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    console.log(`The Fibonacci with recursive`);
console.log(`This took ${performance.now() - start3} milliseconds to run`);

    
    // iterative
    let start4= performance.now();
 primeCount = 0;
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);
    console.log(`The Fibonacci with iterative`);
    console.log(`This took ${performance.now() - start4} milliseconds to run`);
    
    
    let start5= performance.now();
    primeCount = 0;
    const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    const reversed1 = story.split("").reverse().join("");
    console.log(`The Reverse of String with built in function`);
    console.log(`This took ${performance.now() - start5} milliseconds to run`);

    let start6= performance.now();
    primeCount = 0;
    // const story1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    let arr = story.split('');
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Swap characters
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        left++;
        right--;
    }
    //  console.log(arr.join());
    console.log(`The Reverse of String with My way function`);
    console.log(`This took ${performance.now() - start6} milliseconds to run`);

