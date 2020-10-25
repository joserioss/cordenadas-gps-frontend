import { FileModelService } from './../../service/file-model.service';
import { FileModel } from './../../_model/fileModel';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  dataSource: MatTableDataSource<FileModel>;
  displayedColumns = ['name', 'lat', 'lon'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  fileInfos: Observable<any>;

  constructor(
    public route: ActivatedRoute,
    private fileModelService: FileModelService
    ) { }

  ngOnInit(): void {
    this.fileModelService.listar().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

}
