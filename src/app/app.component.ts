import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: string = "";

  onSubmit() {
    const message = "Olá mundo";

    // Formatar o número de telefone para o padrão internacional
    const formattedNumber = `https://api.whatsapp.com/send?phone=55${this.number.replace(/\D/g, "")}&text=${encodeURIComponent(message)}`;

    // Abrir a janela do WhatsApp com a mensagem
    window.open(formattedNumber, "_blank");

    // Limpar o formulário
    this.number = "";
  }
}
