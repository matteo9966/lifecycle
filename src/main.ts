import 'zone.js/dist/zone';
import { Component, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HookCModule } from './hook/hook.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HookCModule],
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';
  updatecount = 0;
  userdata = {
    name: 'tommy',
  };

 

  updateuserdata() {
    this.userdata.name = `tommy - ${this.updatecount}update`;
    this.updatecount++;
  }
  updateImmutable() {
    this.updatecount++;
    this.userdata = {
      ...this.userdata,
      name: `tommy - ${this.updatecount}update`,
    };
  }
}

bootstrapApplication(App);
