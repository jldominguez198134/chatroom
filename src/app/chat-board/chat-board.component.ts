import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css']
})
export class ChatBoardComponent implements OnInit {

  @Input() msg: string;
  @Input() user: string;

  constructor() {
    this.msg = '';
  }

  ngOnInit() {
  }

}
