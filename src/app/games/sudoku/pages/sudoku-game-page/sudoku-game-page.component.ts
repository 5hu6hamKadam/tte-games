import { Component } from '@angular/core';
import { GameManagerService } from '../../services/game-manager.service';
import { SudokuBoard } from '../../models/sudoku-board.class';

@Component({
  selector: 'app-sudoku-game-page',
  templateUrl: './sudoku-game-page.component.html',
  styleUrls: ['./sudoku-game-page.component.scss'],
})
export class SudokuGamePageComponent {
  public board: SudokuBoard;

  constructor(public gameManagerService: GameManagerService) {
    this.board = this.gameManagerService.board;
  }

  public onClickOutside() {
    this.board.clearHighlights();
  }
}
