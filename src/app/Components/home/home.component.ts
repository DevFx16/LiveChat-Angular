import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service';
import { Router } from '@angular/router';
import { UsuarioLocal } from '../../Models/usuario.model';
import * as swal from 'sweetalert';
declare const $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    User: UsuarioLocal;
    Valid: boolean;
    height: string;

    constructor(private userService: UsuariosService, private _Router: Router) {
        this.Valid = true;
        this.userService.ObtenerUser().then(data => {
            if (!data) {
                this._Router.navigate(['/Login']);
            } else {
                this.User = new UsuarioLocal(data.Nombre, data.Email, data.Password, data.Foto, data.Token, 20, 25);
                this.userService.VerficarEstado(this.User).then(json => {
                    console.log(json);
                }).catch(err => {
                    if (data) {
                        this.userService.BorrarTodo();
                        sweetAlert('Sesión Caducada', 'Vuelva a iniciar sesión', 'info');
                    }
                    this._Router.navigate(['/Login']);
                })
            }
            this.Valid = false;
        }).catch(err => {
            this._Router.navigate(['/Login']);
        });
    }

    ngOnInit() {
        this.height = ($(window).height() - $('.fixed.menu').height() - $('.ui.divider').height() - 20) + 'px';
        window.onresize = () => {
            this.height = $(window).height() + 'px';
        }
    }

    Cerrar() {
        sweetAlert({
            title: '¿Esta seguro de querer salir?',
            icon: 'warning',
            buttons: ['Cancelar', 'Salir'],
            dangerMode: true
        }).then(value => {
            if (value) {
                this.SideBar();
                this.userService.BorrarTodo();
                this._Router.navigate(['/Login']);
            }
        })
    }

    SideBar() {
        $('.ui.sidebar')
            .sidebar('toggle')
    }

}
