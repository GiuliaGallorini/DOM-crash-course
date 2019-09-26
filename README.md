# DOM Crash Course

[Course by Brad Traversy](https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s)

## DOM

The Document Object Model:

- it is a structural representation of your HTML document, like a tree of nodes/elements created by the browser<br>
- JavaScript can be used to read/write/manipulate to the DOM and its elements<br>
- it is an Object Oriented Representation, it means that each node has its own properties and methods<br>

The Browser gives a window object that represents the browser itself, it is a top-level object; then a root element inside the document; and a root element that is the <html> tag (or element or node); inside we have children like <head> and <body> tags; those have their own children (<title>, <meta>, <header>, <div>, <a>, <h1>, <input>, <form>, <ul>, <li>, etc) that have texts.<br>

## JQUERY

The JQuery uses the dollar sign for the variables \$

## STYLE

It is installed Bootstrap.

## EXAMINE THE DOCUMENT OBJECT

**HTMLCollection !== array**
You cannot use the array methods with HTML Collections.<br>
Instead a **NodeList** is more similar to arrays.<br>

## SELECTORS

a. document.getElementById('')<br>
b. document.getElementsByClassName('')<br>
c. document.getElementsByTagName('')<br>

## QUERY SELECTORS

a. document.querySelector('tag', '#id', '.class') - you use it only for one item, it grabs only the first one.<br>
You can use the same CSS-selectors:<br>

- 'input[type="submit"]'
- '.list-group-item'
- '.list-group-item:last-child'
- '.list-group-item:nth-child(2)'

b. document.querySelectorAll('') - This gives a NodeList that is similar to a collection, but you can run array functions <br>

## METHODS

Three methods to access the text content:

1. element.textContent - does not pay attention to the style
2. element.innerText - pays attention to the style
3. element.innerHTML

For style changes:

- element.style.borderBottom = 'solid 3px #000';
- element.style.fontWeight = 'bold';
- element.style.backgroundColor = 'yellow';
- element.style.textAlign = 'center';
- elements[1].style.textAlign = 'center';
- for (var i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = '#f4f4f4'; }
