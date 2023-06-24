import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuSlotComponent } from './sudoku-slot.component';

describe('SudokuSlotComponent', () => {
  let component: SudokuSlotComponent;
  let fixture: ComponentFixture<SudokuSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
