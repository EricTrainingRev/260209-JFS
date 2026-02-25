import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = "";
  password = "";

  constructor(private userService: UserService){}

  attemptLogin(){
    this.userService.login(this.username, this.password);
  }

}
