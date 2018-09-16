import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor() { }

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
