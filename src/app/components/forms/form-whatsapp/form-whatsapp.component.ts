import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-whatsapp',
  templateUrl: './form-whatsapp.component.html',
  styleUrls: ['./form-whatsapp.component.css'],
  standalone: false,
})
export class FormWhatsappComponent {
  number: string = '';
  message: string = '';

  onSubmit() {
    let cleanNumber = this.number.trim().replace(/[^\d+]/g, '');
    let formattedNumber: string;
    if (cleanNumber.startsWith('+')) {
      formattedNumber = cleanNumber.substring(1);
    } else {
      formattedNumber = '55' + cleanNumber;
    }
    const encodedMessage = encodeURIComponent(this.message);
    const link = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

    window.open(link, '_blank');
    this.number = '';
    this.message = '';
  }
}