import { Component, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ThoughtComponent } from "../thought/thought.component";
@Component({
  selector: 'app-create-thought',
  imports: [FormsModule, RouterLink],
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css',
})
export class CreateThoughtComponent {
  modeloCard = signal<string>('');
  pensamento = signal({
    conteudo: '',
    autoria: '',
  })
pensamentos: {
  id: string,
  conteudo: string,
  autoria: string,
  modelo: string
}[] = [];
  criarPensamento() {
    if (
      this.pensamento().conteudo.length < 3 ||
      this.pensamento().autoria.length < 3 ||
      !this.modeloCard()
    )
      return alert('Requisitos não cumpridos!');

    this.pensamentos.push({
      id: (this.pensamentos.length+1).toString(),
      conteudo: this.pensamento().conteudo,
      autoria: this.pensamento().autoria,
      modelo: this.modeloCard(),
    });
    console.log(this.pensamentos);
    alert('Pensamento criado!');
  }

  cancelarPensamento() {
    console.log('Pensamento cancelado!');
  }
}
