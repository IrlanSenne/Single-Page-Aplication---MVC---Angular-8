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
import { CifraDtComponent } from './cifra-dt/cifra-dt.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
                                                                                                                                      import { MoradaComponent } from './morada/morada.component';
import { CifraMoradaComponent } from './cifra-morada/cifra-morada.component';
import { CifraGabrielaRochaComponent } from './cifra-gabriela-rocha/cifra-gabriela-rocha.component';
import { CifraZoeComponent } from './cifra-zoe/cifra-zoe.component';
import { CifraIsaiasSaadComponent } from './cifra-isaias-saad/cifra-isaias-saad.component';
import { CifraCasaWorshipComponent } from './cifra-casa-worship/cifra-casa-worship.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    CifraComponent,    
    AutofocusDirective,    
    CifraDtComponent,
    CifraMoradaComponent,    
    CifraGabrielaRochaComponent,    
    CifraZoeComponent,    
    CifraIsaiasSaadComponent,    
    CifraCasaWorshipComponent    
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
