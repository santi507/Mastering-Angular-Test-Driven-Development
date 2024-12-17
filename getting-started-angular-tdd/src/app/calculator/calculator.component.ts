import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: false,

  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  add(a: number, b: number): number {
    return a + b;
  }
}
