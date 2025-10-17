import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-header',
  imports: [CommonModule, RouterLink],
  template: `
    <header class="user-header">
      <div class="header-container">
        <div class="logo">
          <a routerLink="/home">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
            <span>Mini Football</span>
          </a>
        </div>
        
        <nav class="nav-menu">
          <a routerLink="/home" routerLinkActive="active">Trang chủ</a>
          <a routerLink="/pitches" routerLinkActive="active">Danh sách sân</a>
          <a href="#features">Dịch vụ</a>
          <a href="#testimonials">Đánh giá</a>
          <a href="#contact">Liên hệ</a>
        </nav>
        
        <div class="header-actions">
          <button class="btn-call">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>0987.654.321</span>
          </button>

          @if (authService.isLoggedIn()) {
            <!-- User đã đăng nhập -->
            <div class="user-menu">
              <button class="user-avatar" (click)="toggleUserMenu()">
                @if (authService.currentUser()?.avatar) {
                  <img [src]="authService.currentUser()!.avatar" alt="Avatar">
                } @else {
                  <div class="avatar-placeholder">
                    {{ (authService.currentUser()?.name || 'U').charAt(0).toUpperCase() }}
                  </div>
                }
                <span>{{ authService.currentUser()?.name }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              @if (showUserMenu) {
                <div class="user-dropdown">
                  <a href="#" class="dropdown-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Thông tin cá nhân
                  </a>
                  <a href="#" class="dropdown-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Lịch đặt sân
                  </a>
                  <div class="dropdown-divider"></div>
                  <button (click)="logout()" class="dropdown-item logout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Đăng xuất
                  </button>
                </div>
              }
            </div>
          } @else {
            <!-- Chưa đăng nhập -->
            <div class="auth-buttons">
              <a routerLink="/login" class="btn-login">Đăng nhập</a>
              <a routerLink="/register" class="btn-primary">Đăng ký</a>
            </div>
          }
        </div>
      </div>
    </header>
  `,
  styles: [`
    .user-header {
      background: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
    }

    .logo a {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: #10b981;
      font-size: 24px;
      font-weight: 800;
    }

    .logo svg {
      width: 36px;
      height: 36px;
    }

    .nav-menu {
      display: flex;
      gap: 32px;
      flex: 1;
      justify-content: center;
    }

    .nav-menu a {
      text-decoration: none;
      color: #6b7280;
      font-weight: 500;
      font-size: 15px;
      transition: color 0.2s;
      position: relative;
    }

    .nav-menu a:hover,
    .nav-menu a.active {
      color: #10b981;
    }

    .nav-menu a.active::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 2px;
      background: #10b981;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .btn-call {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: white;
      color: #374151;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-call:hover {
      border-color: #10b981;
      color: #10b981;
      background: #f0fdf4;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      padding: 10px 24px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      font-weight: 600;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.2s;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }

    .auth-buttons {
      display: flex;
      gap: 12px;
    }

    .btn-login {
      display: inline-flex;
      align-items: center;
      padding: 10px 24px;
      background: white;
      color: #10b981;
      font-weight: 600;
      border: 2px solid #10b981;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.2s;
    }

    .btn-login:hover {
      background: #f0fdf4;
    }

    .user-menu {
      position: relative;
    }

    .user-avatar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px 6px 6px;
      border: 2px solid #e5e7eb;
      border-radius: 50px;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
    }

    .user-avatar:hover {
      border-color: #10b981;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
    }

    .user-avatar img,
    .avatar-placeholder {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }

    .avatar-placeholder {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 14px;
    }

    .user-avatar span {
      font-weight: 600;
      color: #374151;
      font-size: 14px;
    }

    .user-dropdown {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      min-width: 220px;
      padding: 8px;
      z-index: 1000;
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      color: #374151;
      text-decoration: none;
      border-radius: 8px;
      transition: background 0.2s;
      font-size: 14px;
      font-weight: 500;
      border: none;
      width: 100%;
      background: none;
      cursor: pointer;
      text-align: left;
    }

    .dropdown-item:hover {
      background: #f3f4f6;
    }

    .dropdown-item.logout {
      color: #dc2626;
    }

    .dropdown-item.logout:hover {
      background: #fee2e2;
    }

    .dropdown-divider {
      height: 1px;
      background: #e5e7eb;
      margin: 8px 0;
    }

    @media (max-width: 768px) {
      .nav-menu {
        display: none;
      }
      
      .btn-call span {
        display: none;
      }

      .user-avatar span {
        display: none;
      }

      .auth-buttons .btn-login {
        padding: 10px 16px;
        font-size: 14px;
      }

      .auth-buttons .btn-primary {
        padding: 10px 16px;
        font-size: 14px;
      }
    }
  `]
})
export class UserHeaderComponent {
  showUserMenu = false;

  constructor(public authService: AuthService) {}

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logout() {
    this.showUserMenu = false;
    this.authService.logout();
  }
}
