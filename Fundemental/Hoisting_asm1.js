

// // 1 
// console.log(hello);                                   
// var hello = 'world';                                 

// // var hello ; 
// // console.log(hello);                                   
// //  hello = 'world';                                 

// /////////////////////////////////////////////
// // 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// // output : magnegt 

// ////////////////////////////////////////
// // 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// //output: super cool
// //////////////////////////////////////////////////////////////
// // 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// // function eat(){
            // var food; 
//         food = 'half-chicken';
//         console.log(food);
//         var food = 'gone';
//     }
//output : chicken 
//         half-chicken 
///////////////////////////////////////////////////////
// 5


// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }

// console.log(food);
//prediect : chicken
//           fish 
//           undefine or error uninitialize 
//           undefine or error uninitialize 

///////////////////////////////////////////////////////////
// 6 
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// var gener 
// console.log(genre); // undefine 
//  genre = "disco";
// rewind();
// function rewind() {
//     var genre ; 
//     genre = "rock";
//     console.log(genre); // rock 
//     var genre = "r&b";
//     console.log(genre); // r&b 
// }
// console.log(genre); // disco
// prediect : undfine 
            //   rock 
            //   r&b
            //   disco
// output : undfine 
            //   rock 
            //   r&b
            //   disco            
 //////////////////////////////////////////////////////////
 // 7 
//  dojo = "san jose";
//  console.log(dojo);
//  learn();
//  function learn() {
//      dojo = "seattle";
//      console.log(dojo);
//      var dojo = "burbank";
//      console.log(dojo);
//  }
//  console.log(dojo);
  
//  dojo = "san jose";
//  console.log(dojo);
//  learn();
//  function learn() {
        // var dojo
//      dojo = "seattle";
//      console.log(dojo);
//      dojo = "burbank";
//      console.log(dojo);
//  }
//  console.log(dojo);
// predict :  san jose
            //   seattle 
            //   burbank 
            // san jose
//output :  san jose
            //   seattle 
            //   burbank 
            // san jose            
////////////////////////////////////////////////////////
// 8 

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// predict :  dojo object { name: 'Chicago', students: 65, hiring: true }
            //   "closed for now" or error because it constant
// output :  dojo object { name: 'Chicago', students: 65, hiring: true }
            //  error because it constant
