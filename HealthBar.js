function updateHealthBar(value) {
  const healthBar = document.getElementById("health");
  const healthText = document.getElementById("health-Text");

  healthText.innerText = value;
  healthBar.style.width = value + "%";

  if (value >50) {
    healthBar.style.backgroundColor = "green";
  } else if (value > 20) {
    healthBar.style.backgroundColor = "orange";
  } else if (value > 0) {
    healthBar.style.backgroundColor = "red";
  }
}