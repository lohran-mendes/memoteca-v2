import { Component, inject, OnInit, signal } from '@angular/core';
import { type Thought } from '../../../interfaces/thought';
import { ThoughtService } from '../../../services/thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrl: './delete-thought.component.css',
})
export class DeleteThoughtComponent implements OnInit {
  thoughtService = inject(ThoughtService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  thought = signal<Thought>({
    autoria: '',
    conteudo: '',
    modelo: '',
    id: 0,
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id){
      const numericId = Number(id)
      this.thoughtService.searchThought(numericId).subscribe({
        next: (retorno) =>
          this.thought.update((currentValue) => ({
            ...currentValue,
            id: retorno.id,
          })),
        });
      }
  }

  excluirPensamento() {
    const thoughtId = this.thought().id;
    if (thoughtId) {
      this.thoughtService.deleteThought(thoughtId).subscribe({
        next: () => this.router.navigate(['listar-pensamentos']),
      });
    }
  }
  cancelar() {
    this.router.navigate(['listar-pensamentos']);
  }
}
