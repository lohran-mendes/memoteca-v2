import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { type Thought } from '../../../interfaces/thought';
import { ThoughtService } from '../../../services/thought.service';
@Component({
  selector: 'app-create-thought',
  imports: [FormsModule, RouterLink],
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css',
})
export class CreateThoughtComponent {
  thoughtService = inject(ThoughtService);
  router = inject(Router)
  pensamentoModelo = signal<Thought>({
    conteudo: '',
    autoria: '',
    modelo: '',
  });

  criarPensamentoModelo() {
    this.thoughtService.createThought(this.pensamentoModelo()).subscribe({
      next: () => this.router.navigate(['listar-pensamentos'])
    });
    }

  cancelarPensamentoModelo() {
    this.router.navigate(['listar-pensamentos'])
  }
}
