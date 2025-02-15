import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThoughtComponent } from '../thought/thought.component';
import { type Thought } from '../../../interfaces/thought';
import { ThoughtService } from '../../../services/thought.service';
import { LoadMoreButton } from './load-more-button/load-more-button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-thought',
  imports: [RouterLink, ThoughtComponent, LoadMoreButton, FormsModule],
  templateUrl: './list-thought.component.html',
  styleUrl: './list-thought.component.css',
})
export class ListThoughtComponent implements OnInit {
  thoughtService = inject(ThoughtService);

  enteredFilter = signal<string>('');

  listThought = signal<Thought[]>([]);
  favoritesThoughtsList = signal<Thought[]>([]);

  hasFiltredForFavorite = signal<boolean>(false);
  hasMoreThoughts = signal<boolean>(true);
  currentPage = signal<number>(1);
  title = signal<string>('Meu Mural');

  ngOnInit(): void {
    this.listAllThoughts();
  }

  listAllThoughts() {
    this.title.set('Meu Mural');
    this.hasFiltredForFavorite.set(false);
    this.updateThoughtList();
  }

  listFavoriteThoughts() {
    this.title.set('Meus Favoritos');
    this.hasFiltredForFavorite.set(true);
    this.updateThoughtList();
  }

  updateThoughtList() {
    this.currentPage.set(1);
    this.hasMoreThoughts.set(true);
    this.thoughtService
      .listThoughts(
        this.currentPage(),
        this.enteredFilter(),
        this.hasFiltredForFavorite()
      )
      .subscribe({
        next: (response) => {
          this.listThought.set(response);
          if (this.hasFiltredForFavorite()) {
            this.favoritesThoughtsList.set(response);
          }
        },
      });
  }

  searchThought() {
    this.currentPage.set(1);
    this.hasMoreThoughts.set(true);
    this.thoughtService
      .listThoughts(
        this.currentPage(),
        this.enteredFilter(),
        this.hasFiltredForFavorite()
      )
      .subscribe({
        next: (response) => this.listThought.set(response),
      });
  }

  LoadMoreThoughts() {
    if (this.hasMoreThoughts) {
      this.currentPage.set(this.currentPage() + 1);
      this.thoughtService
        .listThoughts(
          this.currentPage(),
          this.enteredFilter(),
          this.hasFiltredForFavorite()
        )
        .subscribe((listThought) => {
          this.listThought().push(...listThought);
          if (!listThought.length) {
            this.hasMoreThoughts.set(false);
          }
        });
    }
  }
}
