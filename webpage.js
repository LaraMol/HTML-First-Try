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
