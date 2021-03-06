import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './pages/principal/principal.component';
import { UploadFilesComponent } from './pages/upload-files/upload-files.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UploadFilesComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
