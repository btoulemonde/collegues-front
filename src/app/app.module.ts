import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { ModifierCollegueComponent } from './modifier-collegue/modifier-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    ModifierCollegueComponent
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
