document.addEventListener("DOMContentLoaded", function() {
    let newText = document.getElementById("text");
    newText.textContent = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );