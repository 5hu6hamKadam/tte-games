import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sudoku',
    loadChildren: () =>
      import('./games/sudoku/sudoku.module').then((m) => m.SudokuModule),
  },
  {
    path: '',
    redirectTo: 'sudoku',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
