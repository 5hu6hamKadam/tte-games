import { Injectable } from '@angular/core';
import { SudokuBoard } from '../models/sudoku-board.class';
import { SudokuMemento } from '../models/sudoku-memento.class';
import { SUDOKU_QUESTIONS } from '../types/constants';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  public board: SudokuBoard;
  public activeMementoIndex = 0;
  public history: SudokuMemento[];

  constructor() {
    this.board = new SudokuBoard();
    this.history = [];
    this.board.initializeSlots(SUDOKU_QUESTIONS);
  }

  public setSlotValue(value: number): void {
    if (!this.board.getSelectedCellPosition()) {
      return;
    }
    const { x, y } = this.board.getSelectedCellPosition();
    const slot = this.board.getSlots()[x][y];
    slot.value = value;
    this.preserveState();
  }

  public setSlotNote(note: number): void {
    if (!this.board.getSelectedCellPosition()) {
      return;
    }
    const { x, y } = this.board.getSelectedCellPosition();
    const slot = this.board.getSlots()[x][y];
    slot.toggleNotes(note);
    this.preserveState();
  }

  public undo(): void {
    if (this.activeMementoIndex === 0) {
      return;
    }
    this.activeMementoIndex--;
    const memento = this.history[this.activeMementoIndex];
    if (!memento) {
      return;
    }
    this.board.restoreFromMemento(memento);
  }

  public redo(): void {
    if (this.activeMementoIndex === this.history.length - 1) {
      return;
    }
    this.activeMementoIndex++;
    const memento = this.history[this.activeMementoIndex];
    if (!memento) {
      return;
    }
    this.board.restoreFromMemento(memento);
  }

  private preserveState(): void {
    this.activeMementoIndex++;
    const clonedBoard = this.board.clone();
    this.history.push(new SudokuMemento(clonedBoard.getSlots()));
  }
}
