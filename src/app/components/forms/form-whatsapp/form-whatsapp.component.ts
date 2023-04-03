import { Component } from '@angular/core';

@Component({
  selector: 'app-form-whatsapp',
  templateUrl: './form-whatsapp.component.html',
  styleUrls: ['./form-whatsapp.component.css']
})
export class FormWhatsappComponent {
  number: string = '';

  onSubmit() {
    const formattedNumber = '55' + this.number.replace(/\D/g, '');
    const mensagem = encodeURIComponent('Olá mundo!');
    const link = `https://wa.me/${formattedNumber}?text=${mensagem}`;

    window.open(link, '_blank');

    // Limpar o formulário
    this.number = '';
  }
}
