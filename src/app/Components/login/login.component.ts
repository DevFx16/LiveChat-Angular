import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../../Models/usuario.model';
import { UsuariosService } from '../../Services/usuarios.service';
import * as swal from 'sweetalert';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  Usuario: UsuarioLogin
  Valid: boolean;

  constructor(private userService: UsuariosService, private _Router: Router) {
    this.Usuario = new UsuarioLogin('', '');
    this.Valid = false;
  }

  Login(): void {
    if (this.Usuario.Email.length > 0 || this.Usuario.Password.length > 0) {
      this.Valid = true;
      this.userService.Login(this.Usuario).then(() => {
        this.Valid = false;
        this._Router.navigate(['/Home']);
      }).catch(err => {
        this.Valid = false;
        sweetAlert('Error', err.error.Error, 'error');
      })
    }
  }

  Reset(): void {
    if(this.Usuario.Email.length > 0){
      this.Valid = true;
      this.userService.ResetContraseña(this.Usuario.Email).then(() => {
        this.Valid = false;
        sweetAlert('Correo Enviado', 'Se ha enviado un correo electronico', 'success');
      }).catch(err => {
        this.Valid = false;
        sweetAlert('Error', err.error.Error, 'error');
      });
    }else{
      sweetAlert('Error', 'Debe escribir el email', 'error');
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