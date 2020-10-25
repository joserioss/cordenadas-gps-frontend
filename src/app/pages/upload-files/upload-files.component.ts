import { FileModel } from './../../_model/fileModel';
import { FileModelService } from './../../service/file-model.service';
import { UploadFilesService } from './../../service/upload-files.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  dataSource: MatTableDataSource<FileModel>;
  displayedColumns = ['idFileModel', 'name', 'url', 'lat', 'lon'];

  selectedFiles: FileList;
  progressInfo = [];
  message = '';
  fileName = "";
  fileInfos: Observable<any>;

  constructor(
    private uploadFilesService: UploadFilesService,
    private fileModelService: FileModelService
    ) { }

  ngOnInit(): void {
    this.fileModelService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.fileInfos = this.uploadFilesService.getFiles();
  }

  selectFiles(event) {
    this.progressInfo = [];

    event.target.files.length == 1 ? this.fileName = event.target.files[0].name : this.fileName = event.target.files.length + " archivos";
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
    setTimeout(() => {
      this.limpiarPantalla();
    },2000);
  }

  upload(index, file) {
    this.progressInfo[index] = { value: 0, fileName: file.name };

    this.uploadFilesService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfo[index].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.uploadFilesService.getFiles();
        }
      },

      err => {
        this.progressInfo[index].value = 0;
        this.message = 'No se puede subir el archivo ' + file.name;
      });
  }

  deleteFile(filename: string) {
    this.uploadFilesService.deleteFile(filename).subscribe(res => {
      this.message = res['message'];
      this.fileInfos = this.uploadFilesService.getFiles();
    });

  }

  limpiarPantalla(){
    this.selectedFiles;
    this.progressInfo = [];
    this.message = '';
    this.fileName = "";
    this.fileInfos;
  }

}
