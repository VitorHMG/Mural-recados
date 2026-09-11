import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuralRecados } from './mural-recados/mural-recados';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MuralRecados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ac1');
}
