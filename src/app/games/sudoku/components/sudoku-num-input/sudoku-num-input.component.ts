import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, filter, fromEvent, map, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-sudoku-num-input',
  templateUrl: './sudoku-num-input.component.html',
  styleUrls: ['./sudoku-num-input.component.scss'],
})
export class SudokuNumInputComponent implements OnInit, OnDestroy {
  public numbers = Array.from({ length: 9 }, (_, index) => index + 1);
  @Output()
  public input = new EventEmitter<number>();
  private ngUnsubscribe$ = new Subject();

  public ngOnInit(): void {
    fromEvent(document, 'keydown')
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        map((e: any) => parseInt(e.key, 10)),
        filter(
          (pressedKey) =>
            !isNaN(pressedKey) && pressedKey >= 1 && pressedKey <= 9
        ),
        tap((v) => this.input.emit(v))
      )
      .subscribe();
  }

  public onInputClick(event: Event, num: number): void {
    event.stopPropagation();
    this.input.emit(num);
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe$.next(null);
    this.ngUnsubscribe$.complete();
  }
}
