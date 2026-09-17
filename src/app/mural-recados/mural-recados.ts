import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Recado {
  id: number;
  text: string;
  isRead: boolean;
  likes: number;
}

@Component({
  selector: 'app-mural-recados',
  imports: [FormsModule],
  templateUrl: './mural-recados.html',
  styleUrl: './mural-recados.css',
})
export class MuralRecados {
  protected recados: Recado[] = [
    { id: 1, text: 'Comprar leite amanhã', isRead: false, likes: 0 },
    { id: 2, text: 'Reunião com o time às 15h', isRead: false, likes: 0 },
    { id: 3, text: 'Trazer material para a aula', isRead: false, likes: 0 },
    { id: 4, text: 'Ligar para o cliente sobre o orçamento', isRead: false, likes: 0 },
  ];

  protected selectedRecado: Recado | null = null;
  protected newRecadoText = '';
  private nextId = 5;

  protected selectRecado(recado: Recado): void {
    this.selectedRecado = recado;
  }

  protected publish(): void {
    const text = this.newRecadoText.trim();
    if (!text) return;
    this.recados.unshift({ id: this.nextId++, text, isRead: false, likes: 0 });
    this.newRecadoText = '';
  }

  protected toggleRead(): void {
    if (this.selectedRecado) {
      this.selectedRecado.isRead = !this.selectedRecado.isRead;
    }
  }

  protected like(): void {
    if (this.selectedRecado) {
      this.selectedRecado.likes++;
    }
  }
}


