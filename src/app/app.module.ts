import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogOverviewExampleComponent } from './dialog-overview-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    DialogOverviewExampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
