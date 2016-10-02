import './rxjs-extension';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonListComponent } from './component/person-list/person-list.component';
import { PersonDetailsComponent } from './component/person-details/person-details.component';

import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
