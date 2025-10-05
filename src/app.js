const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const number = document.getElementById("number").value;
  const message = "Olá";

  const formattedNumber = `https://api.whatsapp.com/send?phone=55${number.replace(
    /\D/g,
    ""
  )}&text=${encodeURIComponent(message)}`;

  window.open(formattedNumber, "_blank");

  document.getElementById("number").value = "";
  window.location.reload();
});
