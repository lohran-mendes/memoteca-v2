import { Component, inject, OnInit, signal } from "@angular/core";
import { ThoughtService } from "../../../services/thought.service";
import { Thought } from "../../../interfaces/thought";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  imports: [ FormsModule, RouterLink],
  styleUrl: './edit-thought.component.css'
})

export class EditThoughComponent implements OnInit{
  thoughtService = inject(ThoughtService);
  router = inject(Router)
  route = inject(ActivatedRoute)
  pensamentoModelo = signal<Thought>({
    conteudo: '',
    autoria: '',
    modelo: '',
    id:  0
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.thoughtService.searchThought(Number(id)).subscribe({
        next: (response) => this.pensamentoModelo.set(response)
      })
    }
  }

  editarPensamentoModelo() {
    this.thoughtService.editThought(this.pensamentoModelo()).subscribe({
      next: () => this.router.navigate(['listar-pensamentos'])
    })
    }

  cancelarPensamentoModelo() {
    this.router.navigate(['listar-pensamentos'])
  }
}