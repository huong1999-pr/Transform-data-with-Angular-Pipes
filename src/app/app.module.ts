import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';





import { FormsModule } from '@angular/forms';


import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { AppTitlePipe } from './pipe-example/app-title.pipe';
import { IsAdultPipe } from './pipe-example/is-adult.pipe';
@NgModule({
  declarations: [ AppComponent, PipeExampleComponent, AppTitlePipe, IsAdultPipe ],
  imports:      [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
