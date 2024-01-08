document.getElementById("actionButton").addEventListener("click", function() {
    alert("Button clicked!");
});

function displayText(){
    let text = document.getElementById("Text");
    text.style.display ="block";
}

const date = new Date();
let year = date.getFullYear();

document.getElementById("year").innerHTML = year;

