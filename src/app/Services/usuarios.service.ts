import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Rutas from './Rutas';
import * as crypto from 'crypto-js';
import { UsuarioRegistro, UsuarioLogin, UsuarioLocal } from '../Models/usuario.model';

@Injectable()
export class UsuariosService {

    constructor(private Http: HttpClient) { }

    async Registrar(Usuario: UsuarioRegistro) {
        return await this.Http.post(Rutas.Registrar, Usuario).toPromise();
    }

    async ResetContraseña(Email: string) {
        return await this.Http.put(Rutas.Reset, { Email: Email }).toPromise();
    }

    async Login(Usuario: UsuarioLogin) {
        return await this.Http.post(Rutas.Login, Usuario).toPromise().then(user => {
            localStorage.setItem('User', crypto.AES.encrypt(JSON.stringify(Object.assign(user, { Email: Usuario.Email, Password: Usuario.Password })), Rutas.AuthEncrypt));
        });
    }

    async BorrarTodo() {
        localStorage.clear();
    }

    async ObtenerUser() {
        return JSON.parse(crypto.AES.decrypt(localStorage.getItem('User'), Rutas.AuthEncrypt).toString(crypto.enc.Utf8));
    }

    async VerficarEstado(Usuario: UsuarioLocal) {
        const headers = new HttpHeaders()
            .set('token', Usuario.Token)
            .set('email', Usuario.Email)
            .set('password', Usuario.Password)
        return this.Http.get(Rutas.Token, { headers: headers }).toPromise();
    }

}
