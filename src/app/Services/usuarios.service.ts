import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Rutas from './Rutas';
import { UsuarioRegistro, UsuarioLogin, UsuarioLocal } from '../Models/usuario.model';

@Injectable()
export class UsuariosService {

  constructor(private Http: HttpClient) { }

  async Registrar(Usuario: UsuarioRegistro) {
    return await this.Http.post(Rutas.Registrar, Usuario).toPromise();
  }

  async Login(Usuario: UsuarioLogin) {
    return await this.Http.post(Rutas.Login, Usuario).toPromise().then(user => {
      localStorage.setItem('Usuario', JSON.stringify(new UsuarioLocal(user.Nombre, Usuario.Email, Usuario.Password, user.Foto, user.Token)));
    });
  }


}
