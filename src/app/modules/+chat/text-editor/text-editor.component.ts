import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @Output() incrementOne = new EventEmitter<Object>();
  msgs: string;
  user: string;
  userHolder: string;
  messageHolder: string;

  constructor() {
    this.userHolder = 'Nombre de usuario';
    this.messageHolder = 'Tu mensaje';
  }

  ngOnInit() {

  }

  enviaMsg() {
    console.log(this.msgs);
    this.incrementOne.emit({message: this.msgs, user: this.user});
  }
}
