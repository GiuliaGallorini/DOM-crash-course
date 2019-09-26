// // TRAVERSING THE DOM //
// // How to query parents, children and siblings.

var itemList = document.querySelector('#items');

// // parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.backgroundColor = 'black';

// // parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// itemList.parentElement.parentElement.style.backgroundColor = 'black';

// // childNodes property
// console.log(itemList.childNodes);
// // It gives a NodeList of 8 elements because it counts also the breaklines as text. This is like a pain in the ass. Not suggested to use it.

// // children property
// console.log(itemList.children);
// // It gives a HTMLCollection
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild property
// console.log(itemList.firstChild);
// // Same problem as above, it is useless

// // firstElementChild property
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // lastChild property
// console.log(itemList.lastChild);
// // Same problem as above, it is useless

// // lastElementChild property
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling method
// console.log(itemList.nextSibling);
// // Same problem as above, it is useless

// // nextElementSibling method
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// // Same problem as above, it is useless

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// -------------------------------- //

// // createElement

// // Create a div
// var newDiv = document.createElement('div');
// // Add class
// newDiv.className = 'hello';
// // Add id
// newDiv.id = 'hello1';
// // Add attribute
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// // Add the new <div> to the DOM
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);

// // style the div
// newDiv.style.fontSize = '30px';

// console.log(newDiv);
