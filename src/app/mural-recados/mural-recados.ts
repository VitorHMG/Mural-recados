import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ac1 } from '../ac1/ac1';

@Component({
  selector: 'app-mural-recados',
  imports: [FormsModule, CommonModule, Ac1],
  templateUrl: './mural-recados.html',
  styleUrl: './mural-recados.css',
})
export class MuralRecados {
  protected recados: string[] = [
    'Comprar leite amanhã',
    'Reunião com o time às 15h',
    'Trazer material para a aula',
    'Ligar para o cliente sobre o orçamento',
  ];

  protected selectedRecado: string | null = null;

  protected newRecadoText = '';

  protected isRead = false;

  protected likes = 0;

  protected selectRecado(recado: string) {
    this.selectedRecado = recado;
    this.isRead = false;
    this.likes = 0;
  }

  protected publish() {
    const text = this.newRecadoText?.trim();
    if (!text) return;
    this.recados.unshift(text);
    this.newRecadoText = '';
  }

  protected toggleRead() {
    this.isRead = !this.isRead;
  }

  protected like() {
    this.likes++;
  }
}
