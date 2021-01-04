import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item.model';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  archivos: FileItem[] = [];
  estaSobreDrop:boolean = false; //Para saber si el mouse está dejando una imagen en el div.

  constructor(private _cargaImagenesService: CargaImagenesService) { }

  ngOnInit() {
  }

  cargarImagenes(){
    this._cargaImagenesService.cargarImagenesFirebase(this.archivos);
  }

  pruebaSobreElemento(event){
    console.log(event);
  }

  limpiarArchivos(){
    this.archivos = [];
  }

}
