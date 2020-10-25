import { HttpClient } from '@angular/common/http';
import { FileModel } from './../_model/fileModel';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileModelService {
  fileModelCambio = new Subject<FileModel[]>();

  url: string = `${environment.baseUrl}/files`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<FileModel[]>(this.url);
  }

  registrar(fileModel: FileModel){
    return this.http.post(this.url, fileModel);
  }

  modificar(fileModel: FileModel){
    return this.http.put(this.url, fileModel);
  }

  eliminar(nameFileModel: string){
    return this.http.get(`${this.url}/delete/${nameFileModel}`);
  }
}
