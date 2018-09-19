import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service';
import { UsuarioRegistro } from '../../Models/usuario.model';
import { Router } from '@angular/router';
import * as swal from 'sweetalert';

declare const $: any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  Usuario: UsuarioRegistro;
  Valid: boolean;

  constructor(private userService: UsuariosService, private _Router: Router) {
    this.Usuario = new UsuarioRegistro('', '', '', 'https://png2.kisspng.com/20171208/4a9/5a2b16a70db6f4.8758920715127732870562.png');
    this.Valid = false;
  }

  Registrar(): void {
    if (this.Usuario.Email.length > 0 && this.Usuario.Nombre.length > 0 && this.Usuario.Password.length > 0) {
      this.Valid = true;
      this.userService.Registrar(this.Usuario).then(user => {
        sweetAlert('Exitoso', 'Registrado proceda al login', 'success').then(() => {
          this._Router.navigate(['/Login']);
        });
      }).catch(err => {
        this.Valid = false;
        sweetAlert('Error', err.error.Error, 'error');
      });
    }
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
