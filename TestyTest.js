window.gameState = {
    selectedPlayer: null,
    player1Health: 8000,
    player2Health: 8000,
    isHealMode: false
};

// Select player buttons
document.querySelector(".player1-btn").addEventListener("click", () => {
    window.gameState.selectedPlayer = "player1";
    alert("Player 1 selected");
});

document.querySelector(".player2-btn").addEventListener("click", () => {
    window.gameState.selectedPlayer = "player2";
    alert("Player 2 selected");
});

// Heal and damage mode buttons
document.getElementById("heal-btn").addEventListener("click", () => {
    if (window.gameState.selectedPlayer) {
        window.gameState.isHealMode = true;
        alert("Heal mode activated");
    } else {
        alert("Please select a player first");
    }
});

document.getElementById("damage-btn").addEventListener("click", () => {
    if (window.gameState.selectedPlayer) {
        window.gameState.isHealMode = false;
        alert("Damage mode activated");
    } else {
        alert("Please select a player first");
    }
});

// Health adjustment
function updateHealth(player, amount) {
    if (!window.gameState.selectedPlayer) {
        alert("Select a player first");
        return;
    }

    const playerKey = window.gameState.selectedPlayer + "Health";
    
    if (window.gameState.isHealMode) {
        window.gameState[playerKey] += amount;
        alert(`${window.gameState.selectedPlayer} healed by ${amount}`);
    } else {
        window.gameState[playerKey] -= amount;
        alert(`${window.gameState.selectedPlayer} took ${amount} damage`);
    }

    updateHealthBar(window.gameState.selectedPlayer, window.gameState[playerKey]);
}

// Update health bars
function updateHealthBar(player, health) {
    const healthBar = document.querySelector(`.${player}-health-bar-fill`);
    const overhealBar = document.querySelector(`.${player}-overheal-bar`);

    const maxHealth = 8000;
    let healthPercentage = (health / maxHealth) * 100;
    let overhealPercentage = 0;

    if (health > maxHealth) {
        overhealPercentage = ((health - maxHealth) / maxHealth) * 100;
        healthPercentage = 100;
    }

    healthBar.style.width = healthPercentage + "%";
    overhealBar.style.width = overhealPercentage + "%";

    // Change health bar color based on health percentage
    if (health > maxHealth) {
        healthBar.style.backgroundColor = "green";
        overhealBar.style.backgroundColor = "blue";
    } else if (healthPercentage > 70) {
        healthBar.style.backgroundColor = "green";
    } else if (healthPercentage > 50) {
        healthBar.style.backgroundColor = "yellow";
    } else if (healthPercentage > 30) {
        healthBar.style.backgroundColor = "orange";
    } else {
        healthBar.style.backgroundColor = "red";
    }
}

// Increment and decrement buttons for health
document.querySelectorAll(".increment").forEach((button, index) => {
    button.addEventListener("click", () => {
        const player = index === 0 ? "player1" : "player2";
        window.gameState[`${player}Health`] += 1000;
        updateHealthBar(player, window.gameState[`${player}Health`]);
    });
});

document.querySelectorAll(".decrement").forEach((button, index) => {
    button.addEventListener("click", () => {
        const player = index === 0 ? "player1" : "player2";
        window.gameState[`${player}Health`] -= 1000;
        updateHealthBar(player, window.gameState[`${player}Health`]);
    });
});

// Calculator functionality
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("calc-display");

    document.querySelectorAll(".calc-btn2").forEach(button => {
        button.addEventListener("click", () => {
            if (button.innerText === "=") {
                const result = eval(display.value);
                display.value = result;

                if (!isNaN(result)) {
                    updateHealth(window.gameState.selectedPlayer, result);
                }
            } else if (button.innerText === "C") {
                display.value = "";
            } else {
                display.value += button.innerText;
            }
        });
    });
});
