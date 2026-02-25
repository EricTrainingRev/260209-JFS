import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {

  username = "";
  password = "";

  constructor(private userService: UserService){}

  attemptRegistration(){
    this.userService.registerUser(this.username, this.password);
  }

}
