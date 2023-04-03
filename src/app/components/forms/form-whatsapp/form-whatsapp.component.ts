import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-whatsapp',
  templateUrl: './form-whatsapp.component.html',
  styleUrls: ['./form-whatsapp.component.css'],
})
export class FormWhatsappComponent {
  @Input() ngModel!: number;

  number: string = '';

  onSubmit() {
    const message = 'Olá mundo';

    // Formatar o número de telefone para o padrão internacional
    const formattedNumber = `https://api.whatsapp.com/send?phone=${this.number.replace(
      /\D/g,
      ''
    )}&text=${encodeURIComponent(message)}`;

    // Abrir a janela do WhatsApp com a mensagem
    window.open(formattedNumber, '_blank');

    // Limpar o formulário
    this.number = '';
  }
}
