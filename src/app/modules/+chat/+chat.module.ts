import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {routes} from "./chat.routes";
import { ChatBoardComponent } from './chat-board/chat-board.component';
import {FormsModule} from "@angular/forms";
import {TextEditorComponent} from "./text-editor/text-editor.component";
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ChatComponent,
    TextEditorComponent,
    ChatBoardComponent
  ]
})
export class chatModule { }
