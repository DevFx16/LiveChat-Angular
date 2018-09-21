import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Rutas from './Rutas';
import * as crypto from 'crypto-js';
import { UsuarioRegistro, UsuarioLogin, UsuarioLocal } from '../Models/usuario.model';

@Injectable()
export class UsuariosService {

  constructor(private Http: HttpClient) { }

  async Registrar(Usuario: UsuarioRegistro) {
    return await this.Http.post(Rutas.Registrar, Usuario).toPromise();
  }

  async Login(Usuario: UsuarioLogin) {
    return await this.Http.post(Rutas.Login, Usuario).toPromise().then(user => {
      localStorage.setItem('User', crypto.AES.encrypt(JSON.stringify(Object.assign(user, { Email: Usuario.Email, Password: Usuario.Password })), Rutas.AuthEncrypt));
    });
  }

  async ObtenerUser() {
    return JSON.parse(crypto.AES.decrypt(localStorage.getItem('User'), Rutas.AuthEncrypt).toString(crypto.enc.Utf8));
  }

}
