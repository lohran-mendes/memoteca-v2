import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ThoughtComponent } from "../thought/thought.component";
@Component({
  selector: 'app-create-thought',
  imports: [FormsModule, RouterLink, ThoughtComponent],
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css',
})
export class CreateThoughtComponent {
  entradaAutoria = signal<string>('');
  entradaPensamento = signal<string>('');
  modeloCard = signal<string>('');

  pensamentos = [
    {
      id: '1',
      conteudo: 'Aprendendo Angular',
      autoria: 'Dev',
      modelo: 'modelo1',
    },
  ];

  criarPensamento() {
    if (
      this.entradaPensamento().length < 3 ||
      this.entradaAutoria().length < 3 ||
      !this.modeloCard()
    )
      return alert('Requisitos não cumpridos!');

    this.pensamentos.push({
      id: (this.pensamentos.length + 1).toString(),
      conteudo: this.entradaPensamento(),
      autoria: this.entradaAutoria(),
      modelo: this.modeloCard(),
    });
    console.log(this.pensamentos);
    alert('Pensamento criado!');
  }

  cancelarPensamento() {
    console.log('Pensamento cancelado!');
  }
}
