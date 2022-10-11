import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';

import localeEsMX from '@angular/common/locales/es-MX';
import localeEsFr from '@angular/common/locales/fr';
import localeEsEn from '@angular/common/locales/en';


registerLocaleData(localeEsMX, localeEsFr, localeEsEn);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { MostrarOcultarPipe } from './pipes/mostrar-ocultar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    MostrarOcultarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-Mx'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
