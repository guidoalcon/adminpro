import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {


  usuarios: Usuario[]= [];
  desde: number=0;
  cargando: boolean= true;

  totalRegistros: number = 0;


  constructor(
    public _usuarioService:UsuarioService,
    public _modalUploadService:ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();

    this._modalUploadService.notificacion
    .subscribe(resp =>

      this.cargarUsuarios()

    );
  }
  mostrarModal(id: string){
      this._modalUploadService.mostrarModal('usuarios',id);
  }



  cargarUsuarios(){

    this.cargando= true;

    this._usuarioService.cargarUsuarios(this.desde)
    .subscribe((resp:any)=>{

      console.log(resp);
      this.totalRegistros = resp.total;
      this.usuarios = resp.usuarios;

      this.cargando=false;
    });
  }

  cambiarDesde( valor: number){
      let desde= this.desde + valor;
      console.log(desde);

      if(desde >= this.totalRegistros){
          return;
      }
      if(desde <0){
        return;
      }

      this.desde+=valor;
      this.cargarUsuarios();
  }

  buscarUsuario( termino: string){

    //console.log(termino);

    if(termino.length <=0){
      this.cargarUsuarios();
      return;
    }
    this.cargando= true;

    this._usuarioService.buscarUsuarios(termino)
    .subscribe((usuarios: Usuario[])=>{

      //console.log(usuarios);

      this.usuarios=usuarios;
      this.cargando=false;

    });
  }

  borrarUsuario(usuario: Usuario){
      if(usuario._id == this._usuarioService.usuario._id){
        alert('no se puede borrar asi mismo');
        return;
      }

      this._usuarioService.borrarUsuario(usuario._id)
          .subscribe(borrado =>{
              console.log(borrado);
              this.cargarUsuarios();

          });

  }

  guardarUsuario( usuario: Usuario ){
      this._usuarioService.actualizarUsuario(usuario)
      .subscribe(borrado =>{
        console.log(borrado);
        alert('usuario cambiado de rol exitosamente');

    });
  }

}
