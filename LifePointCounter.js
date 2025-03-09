document.addEventListener("DOMContentLoaded", () =>{
    document.querySelectorAll(".counter-container").forEach(container => {
        let count = 8000;

        const counterDiv = container.querySelector(".counter");
        const incrementBtn = container.querySelector(".increment");
        const decrementBtn = container.querySelector(".decrement");

        function updateCounter() {
            counterDiv.innerText = count;
        }

        incrementBtn.addEventListener("click", () => {
            count+= 1000;
            updateCounter();
        });

        decrementBtn.addEventListener("click", () => {
            count-= 1000;
            updateCounter();
        });

        updateCounter();
    });
});