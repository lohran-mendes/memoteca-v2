import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThoughtComponent } from '../thought/thought.component';
import { type Thought } from '../../../interfaces/thought';
import { ThoughtService } from '../../../services/thought.service';

@Component({
  selector: 'app-list-thought',
  imports: [RouterLink, ThoughtComponent],
  templateUrl: './list-thought.component.html',
  styleUrl: './list-thought.component.css',
})
export class ListThoughtComponent implements OnInit {
  thoughtService = inject(ThoughtService);
  listThought?: Thought[] = [];

  ngOnInit(): void {
      this.thoughtService.listThoughts().subscribe({
        next: (response) => this.listThought = response
      });
  }
}
