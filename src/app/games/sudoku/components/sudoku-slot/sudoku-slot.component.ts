import { Component, Input } from '@angular/core';
import { SudokuSlot } from '../../models/slot.class';

@Component({
  selector: 'app-sudoku-slot',
  templateUrl: './sudoku-slot.component.html',
  styleUrls: ['./sudoku-slot.component.scss'],
})
export class SudokuSlotComponent {
  @Input()
  public slot!: SudokuSlot;
  public notesList: number[] = Array.from(
    { length: 9 },
    (_, index) => index + 1
  );
}
