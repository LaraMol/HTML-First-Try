let buttons = document.getElementById('navigation').getElementsByTagName("a");
let activeButton = document.querySelector('a.active');

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    
    button.addEventListener("click", () => {
        if (button.classList.contains("active")) {
            return;
        }

        button.classList.add("active");
        activeButton.classList.remove("active");
        activeButton = button;
    });
}

const element = document.getElementById("html");

function scrollToTop() {
    element.scrollIntoView(true);
}

function scrollToBottom() {
    element.scrollIntoView(false);
}