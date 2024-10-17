import {Component} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/contacts']),
      error: err => this.error = 'Invalid username or password'
    });
  }
}
