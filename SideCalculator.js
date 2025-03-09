document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("calc-display");

    document.querySelectorAll(".calc-btn2").forEach(button => {
        button.addEventListener("click", () => {
           if(button.innerText === "=") {
               display.value = eval(display.value);
           } else if(button.innerText === "C") {
                display.value = "";
              } else {
                display.value += button.innerText;
              }
        });
    });
});