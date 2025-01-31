import { CommonModule } from '@angular/common';
import { Component, input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-thought',
  imports: [CommonModule],
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css',
})
export class ThoughtComponent {
  enteredThought = input.required<{
    id: string;
    conteudo: string;
    autoria: string;
    modelo: string;
  }>();

  getWidthClass() {
    if (this.enteredThought().conteudo.length >= 256) {
      return 'pensamento-g';
    } return'pensamento-p';
  }
  get dynamicClasses(): string[] {
    return [this.enteredThought().modelo, this.getWidthClass()];
  }
}
