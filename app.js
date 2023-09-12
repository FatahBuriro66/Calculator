// let input = document.getElementById('inputbox');
// let buttons = document.querySelector('button');

// let string = '';
// let arr = array.from(buttons);
// arr.forEach(button => {
//     button.addEventlistener('click', (e) {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             input.value = string;
//         } else if (e.target.innerHTML == '=') {
//             string = "";
//             input.value = string;
//         } else if (e.target.innerHTML == 'DEL') {
//             string = string.substring(0, string.length - 1);
//             input.value = string;
//         } else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// });


let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button'); // Use querySelectorAll to select all buttons

let string = '';
buttons.forEach(button => {
    button.addEventListener('click', (e) => { // Use 'addEventListener' and fix the arrow function syntax
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') { // Change the condition to 'C' for clearing
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});
