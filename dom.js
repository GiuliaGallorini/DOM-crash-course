// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// // It shows in the console all the properties and methods attached to the Document Object

// console.log(document.domain);
// // It gives you the domain name you are running

// console.log(document.URL);
// // It gives the entire URL

// console.log(document.title);
// // It gives the title of the page, contained in the <head>

// document.title = 123;
// // This is not read only, you can change it

// console.log(document.doctype);
// // The doctype you are using, html5

// console.log(document.head);
// // It gives the <head>

// console.log(document.body);
// // It gives the <body>

// console.log(document.all);
// // It gives an array, or an HTML collection of everything that is in the DOM

// console.log(document.all[10]);
// // It gives only the index 10, the <h1>

// document.all[10].textContent = 'Hello';
// // You can grab that element and change what it contains, but this is not the method you will use to select elements

// console.log(document.forms[0]);
// // It gives a collection of all the forms of the page with their different properties

// console.log(document.links);
// // It gives a collection of all the links of the page, there are not, it gives an empty HTMLCollection that looks like this "[]" but is not an array

// console.log(document.images);
// // It gives a collection of all the images of the page, there are not, it gives an empty HTMLCollection that looks like this "[]" but is not an array

// --------------------------------- //

// SELECTORS

// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// // textContent does not pay attention to the style
// headerTitle.innerText = 'Goodbye';
// // headerTitle pays attention to the style
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items[1].style.textAlign = 'center';

// // items.style.backgroundColor = '#f4f4f4';
// // It gives error because the HTMLCollection is similat to an array and we have to loop through
// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// //items.style.backgroundColor = '#f4f4f4';
// // Gives error, same as above, you have to loop
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR; //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }
