import { Component, Input } from '@angular/core';
import { SudokuBoard } from '../../models/sudoku-board.class';
import { ISudokuPosition } from '../../types/interfaces';

@Component({
  selector: 'app-sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.scss'],
})
export class SudokuBoardComponent {
  @Input()
  public board!: SudokuBoard;

  constructor() {}

  public onSlotClick(event: Event, { x, y }: ISudokuPosition): void {
    event.stopPropagation();
    this.board.onCellClick({ x, y });
  }
}
