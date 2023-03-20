const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const number = document.getElementById("number").value;
  const message = document.getElementById("message").value;
  
  // Formatar o número de telefone para o padrão internacional
  const formattedNumber = `whatsapp:${number.replace(/\D/g, "")}`;
  
  // Abrir a janela do WhatsApp com a mensagem
  window.open(`https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`, "_blank");
  
  // Limpar o formulário
  document.getElementById("number").value = "";
  document.getElementById("message").value = "";
});
