import { Component } from '@angular/core';
import { TextEditorComponent } from './text-editor/text-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fatherMessage: string;
  fatherUser: string;


  constructor() {
    this.fatherMessage = '';
    this.fatherUser = '';
  }

  sendMessage(ev) {
    this.fatherMessage = ev.message;
    this.fatherUser = ev.user;
  }

}
