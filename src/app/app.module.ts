import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrarComponent } from './Components/registrar/registrar.component';


//Rutas
const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Registrar', component: RegistrarComponent },
  { path: '**', redirectTo: 'Login' }
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
