import {Routes} from "@angular/router";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadChildren: './modules/+chat/+chat.module#chatModule',
    data: {
      preload: true
    }
  },
  {
    path: 'users',
    loadChildren: './modules/+users/+users.module#usersModule',
    data: {
      preload: true
    }
  }
];
