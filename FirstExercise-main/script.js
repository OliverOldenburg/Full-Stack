document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const hiddenText = document.getElementById("hiddenText");
    toggleButton.addEventListener("click", function() {
        if (hiddenText.style.display === "none"){
            hiddenText.style.display = "block";
        }
        else {
            hiddenText.style.display ="none";
        }
    });
});



function displayText(){
    let text = document.getElementById("Text");
    text.style.display ="block";
}

const date = new Date();
let year = date.getFullYear();

document.getElementById("year").innerHTML = year;

