import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { AddCatComponent } from './add-cat/add-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    AddCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
