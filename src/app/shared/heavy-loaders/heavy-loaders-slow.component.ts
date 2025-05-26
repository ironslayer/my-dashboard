import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template: ` 
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loaders Slow 
    </section>
  `,
})
export class HeavyLoadersSlowComponent {

  @Input({required: true })
  public cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
      // // Simulate a heavy computation
      // Math.sqrt(Math.random() * 1000000);
    }
    console.log('cargado')
  }

}
