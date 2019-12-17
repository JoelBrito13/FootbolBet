import { Component } from '@angular/core';
import { User } from '../_models/User';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title = 'FootbolBet';
  token = null;
  user: User;
  username = null;
  password = null;
  message = null;
  usuario = null;
  senha = null;

  constructor(private loginService: LoginService) {}

  login(): void {
    this.usuario = this.username
    this.senha = this.password
    this.loginService.login(this.username, this.password).subscribe(token => {
      console.log('TOKEN')
      console.log(token['token'])
      this.token = token;
      console.log('ISSO')
      console.log(JSON.stringify(this.token['token']))
      this.getUser();
    });
  }

  getUser(): void {
    console.log('token')
    console.log(this.token)
    this.loginService.getUser(this.token).subscribe(user => {
      this.user = user;
      console.log('USER');
      console.log(this.user);
    });
  }

}
