// EVENTS //

// // How to add an eventListener
// var button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick);

// function buttonClick(e) {
// console.log('Button clicked');
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// // The following is probably useless
// var output = document.getElementById('output');
// output.innerHTML = '<h3>' + e.target.id + '</h3>';

// // Which kind of event
// console.log(e.type);

// // Position of the click from the browser, window point of view
// console.log(e.clientX);
// console.log(e.clientY);
// // Position of the click from the actual element itself
// console.log(e.offsetX);
// console.log(e.offsetY);

// // Check if you are pressing some key
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// // You can use an if-statement to check if a key was held down and add other functionalities in your script
// }

// --------------------------------- //

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// // These regard only the parent element itself
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// // These regard every inner elements children
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);
// document.body.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//   console.log('EVENT TYPE: ' + e.type);

// output.innerHTML =
//   '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

// box.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)';
// document.body.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)';
// }

// --------------------------------- //

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log('EVENT TYPE: ' + e.type);

//   // !!! With this if you cut everything disappear !!!
//   document.body.style.display = 'none';

//   console.log(e.target.value);
//   document.getElementById('output').innerHTML =
//     '<h3>' + e.target.value + '</h3>';
// }
