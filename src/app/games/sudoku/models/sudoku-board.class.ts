import { ISudokuData, ISudokuPosition } from '../types/interfaces';
import { SudokuSlot } from './slot.class';
import { SudokuMemento } from './sudoku-memento.class';

export class SudokuBoard {
  public isErase = false;
  public isNotes = false;
  private selectedCellPosition!: ISudokuPosition;

  private slots!: SudokuSlot[][];

  constructor() {}

  public restoreFromMemento(memento: SudokuMemento): void {
    const slots: SudokuSlot[][] = JSON.parse(
      JSON.stringify(memento.getState())
    );
    this.slots = slots.map((row) =>
      row.map(
        ({ answer, isVisible, isCellHighlight, isNumberHighlight, value }) =>
          SudokuSlot.fromStateDto({
            answer,
            isVisible,
            isCellHighlight,
            isNumberHighlight,
            value,
          })
      )
    );
  }

  public onCellClick({ x, y }: ISudokuPosition): void {
    const slot = this.slots[x][y];
    this.onEmptyCellClick({ x, y });
    if (this.isErase && !slot.isVisible) {
      slot.value = undefined;
      return;
    }
    if (slot.value) {
      this.onNumberClick(slot.value);
      return;
    }
  }

  public initializeSlots({ answer, question }: ISudokuData): void {
    this.slots = answer.map((row, x) =>
      row.map((answer, y) =>
        SudokuSlot.fromDto({ answer, isVisible: question[x][y] !== 0 })
      )
    );
  }

  public getSlots(): SudokuSlot[][] {
    return this.slots;
  }

  public getSelectedCellPosition(): ISudokuPosition {
    return this.selectedCellPosition;
  }

  public toggleIsErase() {
    this.isErase = !this.isErase;
  }

  public toggleIsNotes() {
    this.isNotes = !this.isNotes;
  }

  public clearHighlights(): void {
    this.slots.forEach((slotRow) => {
      slotRow.forEach((slot) => {
        slot.isCellHighlight = false;
        slot.isNumberHighlight = false;
      });
    });
  }

  public clone(): SudokuBoard {
    const board = new SudokuBoard();
    board.slots = <SudokuSlot[][]>(
      this.slots.map((row) => row.map((slot) => ({ ...slot })))
    );
    return board;
  }

  private onNumberClick(value: number): void {
    this.slots.forEach((slotRows) => {
      slotRows.forEach((slot) => {
        slot.isNumberHighlight = slot.value === value;
      });
    });
  }

  private onEmptyCellClick({ x, y }: ISudokuPosition): void {
    this.selectedCellPosition = { x, y };

    this.slots.forEach((slotRow, rowIndex) => {
      slotRow.forEach((slot, colIndex) => {
        slot.isCellHighlight = rowIndex === x || colIndex === y;
        slot.isNumberHighlight = false;
      });
    });
  }
}
