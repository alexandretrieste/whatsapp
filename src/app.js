const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const number = document.getElementById("number").value;
  const message = "Olá";

  // Formatar o número de telefone para o padrão internacional
  const formattedNumber = `https://api.whatsapp.com/send?phone=55${number.replace(/\D/g, "")}&text=${encodeURIComponent(message)}`;

  // Abrir a janela do WhatsApp com a mensagem
  window.open(formattedNumber, "_blank");

  // Limpar o formulário
  document.getElementById("number").value = "";
});
