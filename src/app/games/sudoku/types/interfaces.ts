export interface ISudokuSlotDto {
  answer: number;
  isVisible: boolean;
}

export interface ISudokuStateDto extends ISudokuSlotDto {
  isCellHighlight: boolean;
  isNumberHighlight: boolean;
  value?: number;
  notesList?: number[];
}

export interface ISudokuData {
  question: number[][];
  answer: number[][];
}

export interface ISudokuPosition {
  x: number;
  y: number;
}
