import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RegisterRequest } from '../../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="register-page">
      <div class="register-container">
        <div class="register-header">
          <h1>Đăng Ký Tài Khoản</h1>
          <p>Tạo tài khoản để trải nghiệm dịch vụ tốt nhất</p>
        </div>

        @if (error) {
          <div class="error-message">{{ error }}</div>
        }

        <form (ngSubmit)="onSubmit()" #registerForm="ngForm">
          <div class="form-group">
            <label for="name">Họ và tên</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="registerData.name"
              required
              minlength="3"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="registerData.email"
              required
              email
              placeholder="example@email.com"
            />
          </div>

          <div class="form-group">
            <label for="phone">Số điện thoại</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              [(ngModel)]="registerData.phone"
              required
              pattern="[0-9]{10}"
              placeholder="0123456789"
            />
          </div>

          <div class="form-group">
            <label for="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              [(ngModel)]="registerData.password"
              required
              minlength="6"
              placeholder="Tối thiểu 6 ký tự"
            />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              [(ngModel)]="registerData.confirmPassword"
              required
              minlength="6"
              placeholder="Nhập lại mật khẩu"
            />
            @if (registerData.confirmPassword && registerData.password !== registerData.confirmPassword) {
              <small class="error-text">Mật khẩu không khớp</small>
            }
          </div>

          <div class="terms-check">
            <label class="checkbox-label">
              <input type="checkbox" name="terms" [(ngModel)]="acceptTerms" required />
              <span>Tôi đồng ý với <a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a></span>
            </label>
          </div>

          <button 
            type="submit" 
            class="btn-submit"
            [disabled]="!registerForm.form.valid || !acceptTerms || registerData.password !== registerData.confirmPassword || loading"
          >
            @if (loading) {
              <span>Đang xử lý...</span>
            } @else {
              <span>Đăng Ký</span>
            }
          </button>
        </form>

        <div class="register-footer">
          <p>Đã có tài khoản? <a routerLink="/login">Đăng nhập ngay</a></p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .register-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2rem 1rem;
    }

    .register-container {
      background: white;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      padding: 3rem;
      width: 100%;
      max-width: 500px;
    }

    .register-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .register-header h1 {
      font-size: 2rem;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .register-header p {
      color: #6b7280;
      font-size: 0.95rem;
    }

    .error-message {
      background: #fee2e2;
      border: 1px solid #fca5a5;
      color: #dc2626;
      padding: 0.75rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
    }

    .form-group {
      margin-bottom: 1.25rem;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }

    .form-group input {
      width: 100%;
      padding: 0.875rem;
      border: 2px solid #e5e7eb;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s;
    }

    .form-group input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .error-text {
      display: block;
      color: #dc2626;
      font-size: 0.85rem;
      margin-top: 0.25rem;
    }

    .terms-check {
      margin-bottom: 1.5rem;
    }

    .checkbox-label {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
      font-size: 0.9rem;
      color: #6b7280;
      line-height: 1.5;
    }

    .checkbox-label input {
      margin-top: 0.2rem;
      flex-shrink: 0;
    }

    .checkbox-label a {
      color: #667eea;
      text-decoration: none;
    }

    .checkbox-label a:hover {
      text-decoration: underline;
    }

    .btn-submit {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn-submit:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
    }

    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .register-footer {
      text-align: center;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid #e5e7eb;
    }

    .register-footer p {
      color: #6b7280;
      font-size: 0.95rem;
    }

    .register-footer a {
      color: #667eea;
      text-decoration: none;
      font-weight: 600;
    }

    .register-footer a:hover {
      text-decoration: underline;
    }

    @media (max-width: 640px) {
      .register-container {
        padding: 2rem 1.5rem;
      }
    }
  `]
})
export class RegisterComponent {
  registerData: RegisterRequest = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: ''
  };
  
  acceptTerms = false;
  loading = false;
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.error = 'Mật khẩu xác nhận không khớp';
      return;
    }

    this.loading = true;
    this.error = '';

    try {
      const success = await this.authService.register(this.registerData);
      if (success) {
        this.router.navigate(['/home']);
      }
    } catch (err) {
      this.error = 'Đăng ký thất bại. Vui lòng thử lại';
    } finally {
      this.loading = false;
    }
  }
}
