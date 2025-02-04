import { Routes } from '@angular/router';

import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'criar-pensamentos',
    pathMatch: 'full',
  },
  {
    path: 'criar-pensamentos',
    component: CreateThoughtComponent,
  },
  {
    path: 'listar-pensamentos',
    component: ListThoughtComponent,
  },
  {
    path: 'pensamentos/deletar-pensamentos/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: '**',
    redirectTo: 'criar-pensamentos'
  }
];
