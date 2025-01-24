import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThoughtComponent } from "../thought/thought.component";

@Component({
  selector: 'app-list-thought',
  imports: [RouterLink, ThoughtComponent, ThoughtComponent],
  templateUrl: './list-thought.component.html',
  styleUrl: './list-thought.component.css'
})
export class ListThoughtComponent {
listThought = [
  {
    id: '1',
    conteudo: 'Tenho que revisar como esse pensamento vai ficar...',
    autoria: 'Lohran',
    modelo: 'modelo1'
  },
  {
    id: '2',
    conteudo: 'Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover.',
    autoria: 'Maria Eduarda',
    modelo: 'modelo3'
  },
  {
    id: '3',
    conteudo: 'Quero trabalhar muito e ficar rico!',
    autoria: 'João Morais',
    modelo: 'modelo2'
  },
  {
    id: '5',
    conteudo: 'Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover. Preciso lembrar de tirar a roupa do varal quando chover.',
    autoria: 'Maria Eduarda',
    modelo: 'modelo3'
  },
  {
    id: '4',
    conteudo: 'Quero ser Sargento do exercito.',
    autoria: 'Lamim',
    modelo: 'modelo3'
  }
]
}
