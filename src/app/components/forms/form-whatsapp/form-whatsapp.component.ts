import { Component } from '@angular/core';

@Component({
    selector: 'app-form-whatsapp',
    templateUrl: './form-whatsapp.component.html',
    styleUrls: ['./form-whatsapp.component.css'],
    standalone: false
})
export class FormWhatsappComponent {
  number: string = '';
  message: string = ''; // Adicione esta linha

  onSubmit() {
    const formattedNumber = '55' + this.number.replace(/\D/g, '');
    const mensagem = encodeURIComponent(this.message); // Modifique esta linha
    const link = `https://wa.me/${formattedNumber}?text=${mensagem}`;

    window.open(link, '_blank');

    // Limpar o formulário
    this.number = '';
    this.message = ''; // Adicione esta linha
  }
}