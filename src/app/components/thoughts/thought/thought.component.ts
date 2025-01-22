import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-thought',
  imports: [CommonModule],
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css',
})
export class ThoughtComponent {
  entradaAutoria = input.required<string>();
  entradaPensamento = input.required<string>();
  modeloPensamento = input.required<string>();

  caminhoModeloPensamento() {
    return `/img/${this.modeloPensamento()}.png`;
  }
}
