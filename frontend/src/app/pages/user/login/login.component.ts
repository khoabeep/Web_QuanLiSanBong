import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginRequest } from '../../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData: LoginRequest = {
    email: '',
    password: ''
  };
  
  loading = false;
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    this.loading = true;
    this.error = '';

    try {
      const success = await this.authService.login(this.loginData);
      if (success) {
        this.router.navigate(['/home']);
      }
    } catch (err) {
      this.error = 'Email hoặc mật khẩu không đúng';
    } finally {
      this.loading = false;
    }
  }
}
