//DOM stands for document object model
//It is a programming interface that allows JavaScript (and other languages) to interact with, manipulate, and modify HTML and XML documents.
/*🎯 Why Use the DOM?
   --->To access elements: Get an element by ID, class, tag, etc.
   --->To change content: Modify text, attributes, CSS styles.
   --->To respond to events: React to clicks, form submissions, etc.
   --->To create/remove elements dynamically.*/

function changetext(){
    //access the element by its id
    let some = document.getElementById("text")

    //change the text 
    some.textContent="Now text is upadated once button is clicked"
    some.style.color = "red"
}