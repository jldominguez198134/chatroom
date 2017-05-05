import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  fatherMessage: string;
  fatherUser: string;
  arrayMessage: Array<Object>;

  constructor() {
    this.fatherMessage = '';
    this.fatherUser = '';
    this.arrayMessage = [];
  }

  sendMessage(ev) {
    this.fatherMessage = ev.message;
    this.fatherUser = ev.user;
    this.arrayMessage.push(ev);
  }

  ngOnInit() {
  }

}
