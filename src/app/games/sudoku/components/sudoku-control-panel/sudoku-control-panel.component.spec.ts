import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuControlPanelComponent } from './sudoku-control-panel.component';

describe('SudokuControlPanelComponent', () => {
  let component: SudokuControlPanelComponent;
  let fixture: ComponentFixture<SudokuControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuControlPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
