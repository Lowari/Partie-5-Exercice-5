const buttonPink = document.getElementById("pinkButton");
const buttonBlue = document.getElementById("blue");
const buttonViolet = document.getElementById("violet");
const buttonBold = document.getElementById("bold");
const buttonItalic = document.getElementById("italic");
const text = document.getElementById("paragraph");


buttonPink.addEventListener('click', function() {
    text.setAttribute("class", "pink");
})

buttonBlue.addEventListener('click', function() {
    text.setAttribute("class", "blue");
})

buttonViolet.addEventListener('click', function() {
    text.setAttribute("class", "violet");
})

buttonBold.addEventListener('click', function() {
    text.setAttribute("class", "bold");
})

buttonItalic.addEventListener('click', function() {
    text.setAttribute("class", "italic");
})

// Algo couleur + effet

// buttonPink.addEventListener('click', function () {
//     if (text.classList == "blue") {
//         text.classList.remove("blue");
//     }
//     if (text.classList == "violet") {
//         text.classList.remove('violet');
//     }
//     text.classList.toggle("pink");
// });

// buttonBlue.addEventListener('click', function () {
//     if (text.classList == "pink") {
//         text.classList.remove("pink");
//     }
//     if (text.classList == "violet") {
//         text.classList.remove('violet');
//     }
//     text.classList.toggle("blue");
// });

// buttonViolet.addEventListener('click', function () {
//     if (text.classList == "pink") {
//         text.classList.remove("pink");
//     }
//     if (text.classList == "blue") {
//         text.classList.remove('blue');
//     }
//     text.classList.toggle("violet");
// });

// buttonItalic.addEventListener('click', function () {
//     if (text.classList == "bold") {
//         text.classList.remove("bold");
//     }
//     text.classList.toggle("italic");
// });

// buttonBold.addEventListener('click', function () {
//     if (text.classList == "italic") {
//         text.classList.remove("italic");
//     }
//     text.classList.toggle("bold");
// });