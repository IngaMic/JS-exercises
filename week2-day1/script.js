// task 1
// Write a function that expects a string representing a selector to be
// passed as a parameter.The function should find all the elements in the document
// that match the selector and change their style so that the text they contain 
// is italic, underlined, and bold.

function change(selector) {
    var ar = document.querySelectorAll(selector);
    for (var i = 0; i < ar.length; i++) {
        ar[i].style.fontStyle = "italic";
        ar[i].style.fontWeight = "bold";
        ar[i].style.textDecoration = "underline"
    }
}

// console.log(change(".first"));   // works
// console.log(change("h1"));     // works  

// task 2
// Write a function that expects a string representing a class name to be passed as a
//  parameter.The function should return an array containing all the elements in the
//  document that have the class that was passed in.


function byClass(name) {
    var arr = [];
    var line = document.getElementsByClassName(name);
    for (var i = 0; i < line.length; i++) {
        var news = line[i];
        arr.push(news);
        // return news;
    }
    return arr;
}

// task 3
// Write a function that inserts an element into the body of the currently
// loaded page.That element should have fixed position, z - index of 2147483647,
// left of 20px, top of 100px, font - size of 200px, and contain the text 'AWESOME'.

function insert(el) {
    var li = document.createElement(el);
    var content = document.createTextNode("AWESOME");
    li.appendChild(content);
    document.body.append(li);
    li.style.position = "fixed";
    li.style.zIndex = "2147483647";
    li.style.left = "20px";
    li.style.top = "100px";
    li.style.fontSize = "200px";
}