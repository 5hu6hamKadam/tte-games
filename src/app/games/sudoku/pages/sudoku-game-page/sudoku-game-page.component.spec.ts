import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuGamePageComponent } from './sudoku-game-page.component';

describe('SudokuGamePageComponent', () => {
  let component: SudokuGamePageComponent;
  let fixture: ComponentFixture<SudokuGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuGamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
