var numf1 = document.getElementById("numf1");
var numf2 = document.getElementById("numf2");
var resultf = document.getElementById("resultf")
var form = document.getElementById("xiswhatpercentofy");



form.addEventListener('submit', function(event) {
    
    if (!numf1.value || !numf2.value){
        alert("Please input a number")
    }
    var x = parseFloat(numf1.value);
    var y = parseFloat(numf2.value);

    var result = x / y;
    var percentage = result * 100;


    resultf.innerText = "Answer is: " + percentage + "%";
   
    event.preventDefault();
});


// var mulf1 = document.getElementById("mulf1");
// var mulf2 = document.getElementById("mulf");
// var Mresultf = document.getElementById("Mresultf");
// var form1 = document.getElementById

// Mresultf.value = 6456



// ("xmultofy").addEventListener('submit', function (event) {

//     if(!mulf1.value || !mulf2.value){
//         alert("Please input a intnumber")
//     }else{
//         var j = parseFloat(mulf1.value);
//         var k = parseFloat(mulf2.value);

//         var mresult = j * k;
        
//         resultf.innerText = "Answer is: " + mresult ;
//         event.preventDefault();
//     }
    
// })


// var mulf1 = document.getElementById("mulf1");
// var mulf2 = document.getElementById("mulf2");
// var mresult = document.getElementById("mresultf");
// var form1 = document.getElementById("xmultofy");

// form.addEventListener('submit', function () {

//     if(!mulf1.value || !mulf2.value){
//         alert("please input")
//     }
    
// })



var luck1 = document.getElementById("sum1");

luck.value = 766

















