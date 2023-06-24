import { SudokuSlot } from './slot.class';

export class SudokuMemento {
  constructor(private state: SudokuSlot[][]) {}

  public getState(): SudokuSlot[][] {
    return this.state;
  }
}
