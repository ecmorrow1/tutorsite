fetch('navbar.html')
.then(response => response.text())
.then(text => {
    let oldElement = document.querySelector("script#navbar_placeholder");
    let newElement = document.createElement("div");
    newElement.innerHTML = text;
    oldElement.parentNode.replaceChild(newElement,oldElement);
})