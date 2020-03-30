import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SassHelperModule } from './sass-helper/sass-helper.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SassHelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
