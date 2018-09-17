import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service';

declare const $: any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  Usuario: { Nombre: string; Email: string; Contraseña: string; Valid: boolean; };
  
  constructor(private userService: UsuariosService) {
    this.Usuario = {
      Nombre: '',
      Email: '',
      Contraseña: '',
      Valid: false
    }
  }

  Registrar(): void {
    setTimeout(() =>{
      this.Usuario.Valid = true;
    }, 3000)
  }

  ngOnInit() {
    $('.ui.form')
      .form({
        fields: {
          Email: {
            identifier: 'Email',
            rules: [
              {
                type: 'empty',
                prompt: 'Email es requerido'
              }
            ]
          },
          Nombre: {
            identifier: 'Nombre',
            rules: [
              {
                type: 'empty',
                prompt: 'Nombre es requerido'
              }
            ]
          },
          Password: {
            identifier: 'Password',
            rules: [
              {
                type: 'empty',
                prompt: 'Contraseña es requerido'
              }
            ]
          }
        }
      })
  }

}
