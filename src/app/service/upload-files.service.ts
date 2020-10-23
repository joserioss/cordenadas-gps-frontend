import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  baseUrl = environment.baseUrl;

  constructor() { }
}
