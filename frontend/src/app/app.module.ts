import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormCuitComponent } from './main/form-cuit/form-cuit.component';
import { ViewComponent } from './view/view.component';
import { CardCuitComponent } from './view/card-cuit/card-cuit.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormCuitComponent,
    ViewComponent,
    CardCuitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ar'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
