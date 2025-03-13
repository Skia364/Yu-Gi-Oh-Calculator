window.gameState = {
    selectedPlayer: null,
    player1Health: 8000,
    player2Health: 8000,
    isHealMode: false
};


    document.getElementById("player1-btn").addEventListener("click", () => {
        selectedPlayer = "player1";
        resetButtonStates();
        alert("Player 1 selected");
    });

    document.getElementById("player2-btn").addEventListener("click", () => {
        selectedPlayer = "player2";
        resetButtonStates();
        alert("Player 2 selected");
    });

    document.getElementById("heal-btn").addEventListener("click", () => {
        if (selectedPlayer !== null) {
            isHealMode = true;
            alert("Heal mode activated");
        } else {
            alert("Please select a player first");
            return;
        }
    });

    document.getElementById("damage-btn").addEventListener("click", () => {
        if (selectedPlayer !== null) {
            isHealMode = false;
            alert("Damage mode activated");
        } else {
            alert("Please select a player first");
            return;
        }
    });

    function resetButtonStates() {
        document.getElementById("heal-btn").disabled= false;
        document.getElementById("damage-btn").disabled= false;
    }

    document.querySelectorAll(".calc-btn2").forEach(button => {
        button.addEventListener("click", () => {
            if (button.innerText === "=") {
                const result = eval(display.value);
                display.value = result;

                if (selectedPlayer !== "null" && display.value !== ""&& !isNaN(result)) {
                    if (isHealMode) {
                        healPlayer(selectedPlayer, result);
                    } else {
                        damagePlayer (selectedPlayer, result);
                    }
                }
            } else if (button.innerText === "C") {
                display.value = "";
            } else {
                display.value += button.innerText;
            }
        });
    });
    
    function healPlayer(player, amount) {
        if (player === "player1") {
            player1Health += amount;
            alert("Player 1 healed by " + amount);
            updateHealthBar("player1", player1Health);
        } else if (player === "player2") {
            player2Health += amount;
            updateHealthBar("player2", player2Health);
            alert("Player 2 healed by " + amount);
        }
    }
    
    function damagePlayer(player, amount) {
        if (player === "player1") {
            player1Health -= amount;
            alert("Player 1 damaged by " + amount);
            updateHealthBar("player1", player1Health);
        } else if (player === "player2") {
            player2Health -= amount;
            alert("Player 2 damaged by " + amount);
            updateHealthBar("player2", player2Health);
        }
    }