import { Marker } from './mapa.interface';
import { FileModelService } from './../../service/file-model.service';
import { FileModel } from './../../_model/fileModel';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  disableSelect = new FormControl(false);

  dataSource: MatTableDataSource<FileModel>;
  displayedColumns = ['name', 'lat', 'lon', 'action'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  fileInfos: Observable<any>;

  lat = [];
  lon = [];
  name = [];
  contador = 0;

  markers: Marker[] = [{
    lat: this.lat,
    lon: this.lon,
    name: this.name
  }];

  title = 'GPS';
  latRef = -42;
  lonRef = -72;

  constructor(private fileModelService: FileModelService) { }

  ngOnInit(): void {
    this.fileModelService.listar().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }


  listarLatLon(fileModel: FileModel){
    this.lat.push(fileModel.lat);
    this.lon.push(fileModel.lon);
  }

}
