import { CommonModule } from '@angular/common';
import {
  Component,
  NgModule,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  Input,
  AfterContentInit,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css'],
})
export class HookComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit
{
  constructor() {}

  //only now the elementRef of the content is visible;
  ngAfterContentInit(): void {
    const projectedContent = this.projected.nativeElement.innerHTML;
    console.log('ngAfterContentInit', projectedContent);
  }

  ngDoCheck(): void {
    console.log('do check called');
    this.updateBecausePropChanged();
  }
  changes = [];
  @Input() userdata: { name: string } = { name: '' };
  @ContentChild('projected') projected!: ElementRef<HTMLDivElement>;
  previousName = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanges called! ');
    this.changes.push({ ...changes });
  }

  ngOnInit() {}

  updateBecausePropChanged() {
    if (this.previousName !== this.userdata.name) {
      console.log('now you should do something');
      this.previousName = this.userdata.name;
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [HookComponent],
  exports: [HookComponent],
})
export class HookCModule {}
