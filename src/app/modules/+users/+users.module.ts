import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersComponent } from './active-users/active-users.component';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {routes} from "../+users/users.routes";
import {UsersService} from "./users.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  providers: [
    UsersService
  ],
  declarations: [ActiveUsersComponent]
})
export class usersModule { }
