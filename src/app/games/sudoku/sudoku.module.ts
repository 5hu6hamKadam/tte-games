import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudokuBoardComponent } from './components/sudoku-board/sudoku-board.component';
import { SudokuSlotComponent } from './components/sudoku-slot/sudoku-slot.component';
import { SudokuGamePageComponent } from './pages/sudoku-game-page/sudoku-game-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SudokuNumInputComponent } from './components/sudoku-num-input/sudoku-num-input.component';
import { SudokuControlPanelComponent } from './components/sudoku-control-panel/sudoku-control-panel.component';

const routes: Routes = [
  {
    path: '',
    component: SudokuGamePageComponent,
  },
];

@NgModule({
  declarations: [
    SudokuBoardComponent,
    SudokuSlotComponent,
    SudokuGamePageComponent,
    SudokuNumInputComponent,
    SudokuControlPanelComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SudokuModule {}
