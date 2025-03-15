document.addEventListener("DOMContentLoaded", () =>{
    document.querySelectorAll(".counter-container").forEach(container => {

        let count = 8000;
        const maxHealth = 8000;

        const counterDiv = container.querySelector(".counter");
        const incrementBtn = container.querySelector(".increment");
        const decrementBtn = container.querySelector(".decrement");
        const healthBarFill = container.querySelector(".health-bar-fill");
        const overhealBar = container.querySelector(".overheal-bar");
        const player1Btn = document.getElementById("player1-btn");
        const player2Btn = document.getElementById("player2-btn");
        const display = document.getElementById("calc-display");

        function updateCounter() {
            counterDiv.innerText = count;
            updateHealthBar();
        }

        function updateHealthBar() {
            let healthPercetage = (count / maxHealth) * 100;
            let overhealPercetage = 0;
            let healthPercentage = healthPercetage;
            let overhealPercentage = overhealPercetage;

            if (count > maxHealth) {
                overhealPercetage = ((count - maxHealth) / maxHealth) * 100;
                overhealPercentage = Math.min(overhealPercentage, 100);
                healthPercentage = 100;
            }

            healthBarFill.style.width = healthPercetage + "%";
            overhealBar.style.width = overhealPercetage + "%";

            if (count > maxHealth) {
                healthBarFill.style.backgroundColor = "green";
                overhealBar.style.backgroundColor = "blue";
            }else if (healthPercentage > 70) {
                healthBarFill.style.backgroundColor = "green";
            }else if (healthPercentage > 50) {
                healthBarFill.style.backgroundColor = "yellow";
            }else if (healthPercentage > 30) {
                healthBarFill.style.backgroundColor = "orange";
            }else if (healthPercentage > 0) {
                healthBarFill.style.backgroundColor = "red";
            }
        }

        function highlightButton(button) {
            player1Btn.classList.remove("active");
            player2Btn.classList.remove("active");
            button.classList.add("active");
        }
        player2Btn.addEventListener("click", () => {
            highlightButton(player2Btn);
        });

        player1Btn.addEventListener("click", () => {
            highlightButton(player1Btn);
        });

        incrementBtn.addEventListener("click", () => {
            count += 1000;
            updateCounter();
        });

        decrementBtn.addEventListener("click", () => {
            count -= 1000;
            updateCounter();
        });
            updateCounter();
      updateCounter();
    });
    document.querySelectorAll(".calc-btn2").forEach(button => {
        const display = document.getElementById("calc-display");

        button.addEventListener("click", () => {
            if (button.innerText === "=") {
                display.value = eval(display.value);
            } else if (button.innerText === "C") {
                display.value = "";
            } else {
                display.value += button.innerText;
            }
        });
    });
});