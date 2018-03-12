// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { ProsConsComponent } from './components/pros-cons/pros-cons.component';
import { AddProsConsComponent } from './components/pros-cons/add-pros-cons/add-pros-cons.component';
import { EditProsConsComponent } from './components/pros-cons/edit-pros-cons/edit-pros-cons.component';

@NgModule({
  declarations: [
    AppComponent,
    ProsConsComponent,
    AddProsConsComponent,
    EditProsConsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
