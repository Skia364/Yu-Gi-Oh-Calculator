document.getElementById("apply-btn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("side-value").value, 10);
  
    if (!isNaN(value) && window.gameState.selectedPlayer !== null) {
      if (window.gameState.isHealMode) {
        window.gameState[`${window.gameState.selectedPlayer}Health`] += value;
      } else {
        window.gameState[`${window.gameState.selectedPlayer}Health`] -= value;
      }
      alert(`${window.gameState.selectedPlayer} new health: ${window.gameState[`${window.gameState.selectedPlayer}Health`]}`);
    } else  {
      alert("Please enter a valid number and select a player first");
    }
  }
  );