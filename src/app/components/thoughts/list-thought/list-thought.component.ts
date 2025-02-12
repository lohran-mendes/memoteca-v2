import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThoughtComponent } from '../thought/thought.component';
import { type Thought } from '../../../interfaces/thought';
import { ThoughtService } from '../../../services/thought.service';
import { LoadMoreButton } from './load-more-button/load-more-button';

@Component({
  selector: 'app-list-thought',
  imports: [RouterLink, ThoughtComponent, LoadMoreButton],
  templateUrl: './list-thought.component.html',
  styleUrl: './list-thought.component.css',
})
export class ListThoughtComponent implements OnInit {
  thoughtService = inject(ThoughtService);
  listThought?: Thought[] = [];
  currentPage = signal<number>(1);
  hasMoreThoughts: boolean = true;

  LoadMoreThoughts() {
    if (this.hasMoreThoughts) {
      this.currentPage.set(this.currentPage() + 1)
      this.thoughtService
        .listThoughts(this.currentPage())
        .subscribe((listThought) => {
          this.listThought?.push(...listThought);
          if (!listThought.length) {
            this.hasMoreThoughts = false;
          }
        });
    }
  }

  ngOnInit(): void {
    this.thoughtService.listThoughts(this.currentPage()).subscribe({
      next: (response) => (this.listThought = response),
    });
  }
}
