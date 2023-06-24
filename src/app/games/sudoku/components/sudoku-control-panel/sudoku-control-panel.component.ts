import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { SudokuBoard } from '../../models/sudoku-board.class';
import { Subject, filter, fromEvent, takeUntil } from 'rxjs';

enum ControlInput {
  Note,
  Erase,
  Undo,
  Redo,
}
const shortCuts = ['n', 'e', 'u', 'r'];
@Component({
  selector: 'app-sudoku-control-panel',
  templateUrl: './sudoku-control-panel.component.html',
  styleUrls: ['./sudoku-control-panel.component.scss'],
})
export class SudokuControlPanelComponent implements OnInit, OnDestroy {
  @Input()
  public board!: SudokuBoard;
  public inputType = ControlInput;
  @Output()
  public undo = new EventEmitter();
  @Output()
  public redo = new EventEmitter();
  private ngUnsubscribe$ = new Subject();

  public ngOnInit(): void {
    fromEvent(document, 'keydown')
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        filter((event: any) => event.altKey && shortCuts.includes(event.key))
      )
      .subscribe((e) => {
        switch (e.key) {
          case 'n':
            this.board.toggleIsNotes();

            break;
          case 'e':
            this.board.toggleIsErase();
            break;
          case 'u':
            this.undo.emit(null);
            break;
          case 'r':
            this.redo.emit(null);
            break;

          default:
            break;
        }
      });
  }

  public onControlInputClick(event: Event, type: ControlInput) {
    event.stopPropagation();
    switch (type) {
      case ControlInput.Note:
        this.board.toggleIsNotes();
        break;
      case ControlInput.Erase:
        this.board.toggleIsErase();
        break;
      case ControlInput.Undo:
        this.undo.emit(null);
        break;
      case ControlInput.Redo:
        this.redo.emit(null);
        break;
      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next(null);
    this.ngUnsubscribe$.complete();
  }
}
