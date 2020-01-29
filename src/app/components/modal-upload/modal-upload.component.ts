import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from 'src/app/services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  //oculto: string='';

  imagenSubir: File;
  imagenTemp: any;

  constructor(
    public _subirArchivoService: SubirArchivoService,
    public _modalUploadService: ModalUploadService
  ) {

    //console.log('modal listo');
   }

  ngOnInit() {
  }



  cerrarModal(){
    this.imagenTemp=null;
    this.imagenSubir=null;

    this._modalUploadService.ocultarModal();

  }

  seleccionImage( archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      //swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      alert('el archivo seleccionado no es una imagen');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;
    /*
    reader.onloadend=()={
      console.log(reader.result);
    };
    */
  }

  subirImagen(){
    this._subirArchivoService.subirArchivo(this.imagenSubir,this._modalUploadService.tipo,this._modalUploadService.id)
    .then(resp=>{
      this._modalUploadService.notificacion.emit(resp);
      //this._modalUploadService.ocultarModal();  // nos daba un error por eso borramos y cambiamos a cerrar
      this.cerrarModal();
    })
    .catch(err=>{
        console.log('error en la carga');
    });
  }



}
