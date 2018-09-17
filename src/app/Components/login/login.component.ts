import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  Usuario: { Nombre: string; Email: string; Contraseña: string; Valid: boolean; };
  Valid: boolean;

  constructor() { 
    this.Usuario = {
      Nombre: '',
      Email: '',
      Contraseña: '',
      Valid: false
    }
    this.Valid = false;
  }

  Login() : void {
    setTimeout(() => {
      this.Usuario.Valid = true;
    }, 2000);
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