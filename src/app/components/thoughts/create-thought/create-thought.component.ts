import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ThoughtService } from '../../../services/thought.service';
@Component({
  selector: 'app-create-thought',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css',
})
export class CreateThoughtComponent implements OnInit {
  thoughtService = inject(ThoughtService);
  router = inject(Router);
  formBuilder = inject(FormBuilder);

  formulario!: FormGroup;

  ngOnInit(): void {
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
      favorito: [false]
    });
  }

  criarPensamentoModelo() {
    if (this.formulario.valid) {
      this.thoughtService.createThought(this.formulario.value).subscribe({
        next: () => this.router.navigate(['listar-pensamentos']),
      });
    }
  }

  cancelarPensamentoModelo() {
    this.router.navigate(['listar-pensamentos']);
  }
}
