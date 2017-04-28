import { Component } from '@angular/core';
import { UsersService } from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fatherMessage: string;
  fatherUser: string;
  arrayMessage: Array<Object>;
  arrayUsers: Array<Object>;


  constructor(private usersService: UsersService) {
    this.fatherMessage = '';
    this.fatherUser = '';
    this.arrayMessage = [];
    usersService.getUsers()
      .subscribe(users => {
        this.arrayUsers = users['results'];
        console.log(this.arrayUsers, users);
      });
  }


  sendMessage(ev) {
    this.fatherMessage = ev.message;
    this.fatherUser = ev.user;
    this.arrayMessage.push(ev);
  }

}
