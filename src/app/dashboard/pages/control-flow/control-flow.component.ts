import { Component, signal } from '@angular/core';


type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'Vue', 'Svelte', 'Qwik','React']);
  public frameworks2 = signal<string[]>(['Angular']);


  public toggleContent() {
    this.showContent.update(value => !value);
  }

}
