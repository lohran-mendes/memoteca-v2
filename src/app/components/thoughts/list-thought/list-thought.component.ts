import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThoughtComponent } from '../thought/thought.component';
import { type Thought } from '../../../interfaces/thought';
import { ThoughtService } from '../../../services/thought.service';
import { LoadMoreButton } from './load-more-button/load-more-button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-thought',
  imports: [ RouterLink, ThoughtComponent, LoadMoreButton, FormsModule],
  templateUrl: './list-thought.component.html',
  styleUrl: './list-thought.component.css',
})
export class ListThoughtComponent implements OnInit {
  thoughtService = inject(ThoughtService);
  listThought?: Thought[] = [];
  currentPage = signal<number>(1);
  hasMoreThoughts = signal<boolean>(true);
  enteredFilter = signal<string>('');

  LoadMoreThoughts() {
    if (this.hasMoreThoughts) {
      this.currentPage.set(this.currentPage() + 1);
      this.thoughtService
        .listThoughts(this.currentPage(), this.enteredFilter())
        .subscribe((listThought) => {
          this.listThought?.push(...listThought);
          if (!listThought.length) {
            this.hasMoreThoughts.set(false);
          }
        });
    }
  }

  searchThought() {
    this.currentPage.set(1);
    this.hasMoreThoughts.set(true);
    this.thoughtService
      .listThoughts(this.currentPage(), this.enteredFilter())
      .subscribe({
        next: (response) => (this.listThought = response),
      });
  }

  ngOnInit(): void {
    this.thoughtService
      .listThoughts(this.currentPage(), this.enteredFilter())
      .subscribe({
        next: (response) => (this.listThought = response),
      });
  }
}
