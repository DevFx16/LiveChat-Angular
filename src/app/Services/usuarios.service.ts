import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Rutas from './Rutas';
import { UsuarioRegistro } from '../Models/usuario.model';

@Injectable()
export class UsuariosService {

  constructor(private Http: HttpClient) { }

  async Registrar(Usuario: UsuarioRegistro) {
    return this.Http.post(Rutas.Registrar, Usuario).toPromise();
  }

}
