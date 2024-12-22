import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'set-calculator',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './set-calculator.component.html',
  styleUrl: './set-calculator.component.scss'
})
export class SetCalculatorComponent {
  workingWeight = new FormControl<number>(0);
  reps = new FormControl(0);

  calcSet(set: number, workingWeight: FormControl){
    const weight = workingWeight.value;

    if(set == 2)
      return ((weight * 50)/100);
    if(set == 3)
      return ((weight * 75)/100);
    if(set == 4)
      return ((weight * 110)/100);
    else 
      return null;
  }

  calcReps(set: number, reps: FormControl){
    const repTargets = reps.value || 0;

    if(set == 2)
      return repTargets;
    else if(set == 3)
      return Math.floor(repTargets/2);
    else if(set == 4)
      return 1;
    else return null;
  }
}
