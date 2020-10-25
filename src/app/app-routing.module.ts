import { MapaComponent } from './pages/mapa/mapa.component';
import { UploadFilesComponent } from './pages/upload-files/upload-files.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent, children:[
    { path: 'uploadFiles', component: UploadFilesComponent }
  ]},
  { path: 'mapa', component: MapaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
