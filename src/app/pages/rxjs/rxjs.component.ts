import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry,map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {


  subscription: Subscription;
  constructor() {



  /*
  this.regresaObservable().pipe(
    retry(2)
  )*/
  this.subscription=this.regresaObservable()
  .subscribe(
    numero=>{ console.log('subs',numero);},
    error=> console.error('Error en el obs',error),
    ()=> console.log('El observador termino')
    );

   }

  ngOnInit() {
  }
  ngOnDestroy(){
    console.log('la pagina se va cerrar');
    this.subscription.unsubscribe();
  }

  /*
  regresaObservable():Observable<number>{

    return new Observable(observer=>{
      let contador=0;
      let intervalo= setInterval(()=>{

        contador+=1;
        observer.next(contador);

        if(contador === 3){

          clearInterval(intervalo);
          observer.complete();
        }
        if(contador === 2){
          //clearInterval(intervalo);
          observer.error('Auxilio');
        }


      },1000);

      });



  }*/

  regresaObservable():Observable<any>{

    return new Observable((observer:Subscriber<any>)=>{
      let contador=0;
      let intervalo= setInterval(()=>{

        contador++;

        const salida={
          valor:contador
        };
        observer.next(salida);

        /*
        if(contador === 3){

          clearInterval(intervalo);
          observer.complete();
        }*/



      },1000);

      }).pipe(
        /*map(resp => {
          return resp.valor+1;
        })*/
        map(resp=> resp.valor),
        filter((valor,index)=>{
          //console.log('filter',valor,index);
          if((valor % 2)===1){
            return true;
          }else{
            return false;
          }

        })
      );



  }

}
