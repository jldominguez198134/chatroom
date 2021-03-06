import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routes } from './app.routes';
import {RouterModule} from "@angular/router";
import {PreloadCustom} from "./modules/+chat/preload-custom.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadCustom
    })
  ],
  providers: [
    PreloadCustom
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
