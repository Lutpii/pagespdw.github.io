function updateDateTime() {
  var now = new Date();
  var hour = now.getHours();
  var greeting;

  if (hour < 12) {
    greeting = "Selamat Pagi, Tamu";
  } else if (hour < 18) {
    greeting = "Selamat siang, Tamu";
  } else {
    greeting = "Selamat malam, Tamu";
  }

  document.getElementById("greeting").textContent = greeting;
  document.getElementById("datetime").textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000); // Update every second