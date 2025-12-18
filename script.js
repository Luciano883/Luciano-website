const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("claro");

  if (document.body.classList.contains("claro")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
});