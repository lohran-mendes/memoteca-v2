import { Component, input } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.html',
  styleUrl: './load-more-button.css',
})
export class LoadMoreButton {
  hasMoreThoughts = input.required<boolean>();
}
