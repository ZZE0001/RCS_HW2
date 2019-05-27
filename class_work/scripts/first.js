// alert("Hello World!");

// document.body.style.backgroundColor = "green";

// document.body.clientWidth 
// client device width at the moment

// check if equals or larger tahn 600px then green, else orange

// FUNCTION

// function changeColor(arg) {
//     if (arg >= 600){
//         document.body.style.backgroundColor = "green";
//     } else {
//         document.body.style.backgroundColor = "orange";
//     }
//     return arg;
// }
// changeColor(document.body.clientWidth);

// WITHOUT FUNCTION
var arg = document.body.clientWidth;

if (arg > 600){
    document.body.style.backgroundColor = "green";
} else {
    document.body.style.backgroundColor = "orange";
}
