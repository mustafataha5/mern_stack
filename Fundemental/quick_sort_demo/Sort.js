




$(document).ready(function(){

    $('#btn1').click(function () {
                console.log("--------------------")
            let arr = [] ; 
            $('#textArea1').text('');
            let num = parseInt($('#number').val() ); 
            console.log(num);
            for(let i =0 ; i < num ; i++){
                arr.push(Math.floor(Math.random() * 100)) ; 
            }
            console.log(arr);
            $('#textArea1').text(arr);
            adjustTextareaHeight(  $('#textArea1'));   
        }
    
    );

    $('#btn11').click(function () {
        console.log("--------------------")
    let arr = [] ; 
    $('#textArea1').text('');
    let num = parseInt($('#number').val() ); 
    console.log(num);
    for(let i =1 ; i < num+1 ; i++){
        arr.push(i) ; 
    }
    console.log(arr);
    $('#textArea1').text(arr);
    adjustTextareaHeight(  $('#textArea1'));   
}
);

$('#btn111').click(function () {
    console.log("--------------------")
let arr = [] ; 
$('#textArea1').text('');
let num = parseInt($('#number').val() ); 
console.log(num);
for(let i =num+1 ; i > 0  ; i--){
    arr.push(i) ; 
}
console.log(arr);
$('#textArea1').text(arr);
adjustTextareaHeight(  $('#textArea1'));   
}
);

$('#btn_example').click(function () {
    console.log("--------------------")
let arr = [] ; 
$('#textArea1').text('');
arr= [41,62,13,84,35,96,57,28,79]; 
//arr= [79,28,57,96,35,84,13,62,41]; 
console.log(arr);
$('#textArea1').text(arr);
adjustTextareaHeight(  $('#textArea1'));   
}
);
  
  }); 

  function adjustTextareaHeight(textarea) {
    textarea.css('height', 'auto');
    textarea.css('height', textarea[0].scrollHeight + 'px');
}




