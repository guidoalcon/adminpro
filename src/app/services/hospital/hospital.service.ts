import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Hospital } from 'src/app/models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  totalHospitales: number =0;

  constructor(
    public http: HttpClient,
    public _usuarioService:UsuarioService
  ) { }



  cargarHospitales(){

    let url =URL_SERVICIOS+'/hospital';

    return this.http.get(url)
        .map((resp:any) =>{

          this.totalHospitales= resp.total;
          return   resp.hospitales;
        }

        );


  }

  obtenerHospital(id: string){
    let url =URL_SERVICIOS+'/hospital/'+ id;

    return this.http.get(url)
            .map((resp:any)=>{
              return resp.hospital;
            });
  }

  borrarHospital(id: string){

      let url= URL_SERVICIOS + '/hospital/'+ id;
      url += '?token='+ this._usuarioService.token;

      return this.http.delete( url )
              .map(resp=>{
                  return alert('Hospital eliminado correctamente');
              });


  }

  crearHospital( nombre: string){

    let url= URL_SERVICIOS + '/hospital/';
    url += '?token='+ this._usuarioService.token;

    return this.http.post(url, {nombre})
            .map( (resp:any) => {


              //swap
              alert('Hospital creado exitosamente');
              return resp.hospital;
            } );


  }

  buscarHospital(termino: string){

    let url= URL_SERVICIOS+'/busqueda/coleccion/hospitales/'+termino;
    return this.http.get(url)
            .map((resp:any)=>resp.hospitales);
  }

  actualizarHospital( hospital: Hospital){

    let url= URL_SERVICIOS + '/hospital/'+ hospital._id;
    url += '?token='+ this._usuarioService.token;

    return this.http.put(url,hospital)
            .map((resp: any)=>{

              //swal
              alert('hospital actualizado');
              return resp.hospital;
            } );


  }


}
