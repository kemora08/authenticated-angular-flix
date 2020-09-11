import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent implements OnInit {
  user: { username: string, password: string };
  invalid = false;

  constructor(private authService: AuthenticationService, private routerservice: Router) {
    this.user = {username: '', password: ''};
   }

  ngOnInit() {
  }
  async login() {
    await this.authService.login(this.user.username, this.user.password);
    if (this.authService.gettoken === undefined) {
      this.invalid = true;
    } else {
      this.invalid = false;
      this.routerservice.navigate(['/main']);
    }

  }
  async signup() {
    await this.authService.signup(this.user.username, this.user.password);
    await this.login();
  }
}
