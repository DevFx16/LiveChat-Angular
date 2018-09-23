import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service';
import { Router } from '@angular/router';
import { UsuarioLocal } from '../../Models/usuario.model';
import * as swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  User: UsuarioLocal;
  Valid: boolean;

  constructor(private userService: UsuariosService, private _Router: Router) {
    this.userService.ObtenerUser().then(data => {
      if (!data) {
        this._Router.navigate(['/Login']);
      } else {
        this.User = new UsuarioLocal(data.Nombre, data.Email, data.Password, data.Foto, data.Token, 20, 25);
      }
    }).catch(err => {
      this._Router.navigate(['/Login']);
    });
  }

  ngOnInit() {

  }

}
