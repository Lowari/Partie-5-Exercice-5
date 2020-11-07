const buttonPink = document.getElementById("pinkButton");
const buttonBlue = document.getElementById("blueButton");
const buttonPurple = document.getElementById("purpleButton");
const buttonBold = document.getElementById("boldButton");
const buttonItalic = document.getElementById("italicButton");
const text = document.getElementById("paragraph");


buttonPink.addEventListener('click', function() {
    text.setAttribute("class", "pink");
});

buttonBlue.addEventListener('click', function() {
    text.setAttribute("class", "blue");
});

buttonPurple.addEventListener('click', function() {
    text.setAttribute("class", "purple");
});

buttonBold.addEventListener('click', function() {
    text.classList.toggle('bold');
});

buttonItalic.addEventListener('click', function() {
    text.classList.toggle('italic');
});