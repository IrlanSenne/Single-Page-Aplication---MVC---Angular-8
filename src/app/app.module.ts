import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CifraComponent } from './cifra/cifra.component';
import { HttpClientModule } from "@angular/common/http";
import { CrudService } from './crud.service';
import { AutofocusDirective } from './autofocus.directive';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
              

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    CifraComponent,    
    AutofocusDirective,    
  
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),      
    
  ],
  exports:[],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
