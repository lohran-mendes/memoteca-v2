import { Routes } from '@angular/router';

import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'criar-componentes',
    pathMatch: 'full',
  },
  {
    path: 'criar-componentes',
    pathMatch: 'full',
    component: CreateThoughtComponent,
  },
  {
    path: 'listar-componentes',
    pathMatch: 'full',
    component: ListThoughtComponent,
  },
];
