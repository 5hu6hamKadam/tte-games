import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuNumInputComponent } from './sudoku-num-input.component';

describe('SudokuNumInputComponent', () => {
  let component: SudokuNumInputComponent;
  let fixture: ComponentFixture<SudokuNumInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuNumInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuNumInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
