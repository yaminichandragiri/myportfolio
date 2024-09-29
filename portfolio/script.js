document.getElementById('copy-phone').addEventListener('click', function() {
    navigator.clipboard.writeText('+91 9912940526');
    alert('Phone number copied!');
});

document.getElementById('copy-mail').addEventListener('click', function() {
    navigator.clipboard.writeText('yamichandragiri@gmail.com');
    alert('Email copied!');
});

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function() {
  const btnText = toggleBtn.querySelector("h1 b");
  // Toggle between "=" and "x"
  if (btnText.textContent === "=") {
    btnText.textContent = "x";
  } else {
    btnText.textContent = "=";
  }
});

  