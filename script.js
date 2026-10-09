const text = "Hi, I am Aditya Bhargava";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 150);
    }
}

typeText();