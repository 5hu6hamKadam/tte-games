import { ISudokuSlotDto, ISudokuStateDto } from '../types/interfaces';

export class SudokuSlot {
  private notes = new Set<number>();

  constructor(
    public answer: number,
    public isVisible: boolean,
    public isCellHighlight = false,
    public isNumberHighlight = false,
    public value?: number,
    private notesList?: number[]
  ) {
    if (this.isVisible) {
      this.value = this.answer;
    }
    if (this.notesList) {
      this.notesList.forEach((note) => this.notes.add(note));
    }
  }

  public toggleNotes(note: number): void {
    if (this.notes.has(note)) {
      this.notes.delete(note);
      return;
    }
    this.notes.add(note);
  }

  public eraseNotes(): void {
    this.notes.clear();
  }

  public eraseValue(): void {
    this.value = undefined;
  }

  public static fromDto({ answer, isVisible }: ISudokuSlotDto) {
    return new SudokuSlot(answer, isVisible);
  }

  public static fromStateDto({
    answer,
    isVisible,
    isCellHighlight,
    isNumberHighlight,
    value,
    notesList,
  }: ISudokuStateDto) {
    return new SudokuSlot(
      answer,
      isVisible,
      isCellHighlight,
      isNumberHighlight,
      value,
      notesList
    );
  }

  public getNotes(): number[] {
    return Array.from(this.notes);
  }
}
