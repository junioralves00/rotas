
import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   usuario: Usuario = new Usuario();

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
     this.AuthService.fazerLogin(this.usuario);
  }

}
