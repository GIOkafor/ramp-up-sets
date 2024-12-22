import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCalculatorComponent } from './set-calculator.component';

describe('SetCalculatorComponent', () => {
  let component: SetCalculatorComponent;
  let fixture: ComponentFixture<SetCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
