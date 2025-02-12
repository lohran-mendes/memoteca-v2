import { Component, inject, OnInit, signal } from '@angular/core';
import { ThoughtService } from '../../../services/thought.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  styleUrl: './edit-thought.component.css',
})
export class EditThoughComponent implements OnInit {
  thoughtService = inject(ThoughtService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);

  formulario!: FormGroup;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.thoughtService.searchThought(Number(id)).subscribe({
        next: ({conteudo, autoria, modelo}) => {
          this.formulario.get('conteudo')?.setValue(conteudo);
          this.formulario.get('autoria')?.setValue(autoria);
          this.formulario.get('modelo')?.setValue(modelo);
        },
      });
    }
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: ['modelo1'],
      id: [id]
    });
  }

  editarPensamentoModelo() {
    this.thoughtService.editThought(this.formulario.value).subscribe({
      next: () => this.router.navigate(['listar-pensamentos']),
    });
  }

  cancelarPensamentoModelo() {
    this.router.navigate(['listar-pensamentos']);
  }
}
