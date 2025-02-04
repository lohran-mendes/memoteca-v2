import { CommonModule } from '@angular/common';
import { Component, input, WritableSignal } from '@angular/core';
import { type Thougth } from '../../../interfaces/thought';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thought',
  imports: [CommonModule, RouterLink],
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css',
})
export class ThoughtComponent {
  enteredThought = input.required<Thougth>();

  getWidthClass() {
    if (this.enteredThought().conteudo.length >= 256) {
      return 'pensamento-g';
    } return'pensamento-p';
  }
  get dynamicClasses(): string[] {
    return [this.enteredThought().modelo, this.getWidthClass()];
  }
}
