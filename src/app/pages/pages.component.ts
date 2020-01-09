import { Component, OnInit } from '@angular/core';
declare function init_plugins(); //para llamar funciones fuera de angular, en este caso de un juery

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
