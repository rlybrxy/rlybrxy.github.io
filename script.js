const display = document.querySelector(".display");
const deletebutton = document.getElementById("delete");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const all = document.querySelectorAll(
    ".percent, .division, .seven, .eight, .nine, .multiply, .four, .five, .six, .minus, .one, .two, .three, .plus, .zero, .decimal");

all.forEach((button) => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

deletebutton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

clear.addEventListener("click", () => {
    display.value = "";
});

equal.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});