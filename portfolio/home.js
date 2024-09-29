const Btn = document.getElementsByClassName("dropbtn");
Btn.addEventListener("click", function(event) {
  
  if (event.target.textContent = "=") {
    event.target.textContent = "x";
  } else {
    event.target.textContent = "=";
  }
});