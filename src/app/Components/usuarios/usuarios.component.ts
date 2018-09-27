import { Component, OnInit, Input } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @Input() height: string;

  constructor() { 

  }

  ngOnInit() {

  }

}
