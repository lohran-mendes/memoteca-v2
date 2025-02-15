import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { type Thought } from '../../../interfaces/thought';
import { RouterLink } from '@angular/router';
import { ThoughtService } from '../../../services/thought.service';

@Component({
  selector: 'app-thought',
  imports: [CommonModule, RouterLink],
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css',
})
export class ThoughtComponent {
  service = inject(ThoughtService);

  enteredThought = input.required<Thought>();
  enteredFavoritesThoughtsList = input.required<Thought[]>();

  get dynamicClasses(): string[] {
    return [this.enteredThought().modelo, this.getWidthClass()];
  }

  getWidthClass() {
    if (this.enteredThought().conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  changeFavoriteIcon(): string {
    if (this.enteredThought().favorito === false) {
      return 'inativo';
    }
    return 'ativo';
  }

  updateFavorite() {
    this.service.toggleFavorite(this.enteredThought()).subscribe({
      next: () =>
        this.enteredFavoritesThoughtsList().splice(
          this.enteredFavoritesThoughtsList().indexOf(this.enteredThought()),
          1
        ),
    });
  }
}
