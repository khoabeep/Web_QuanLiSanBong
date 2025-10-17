import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User, LoginRequest, RegisterRequest } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = signal<User | null>(null);
  isLoggedIn = signal<boolean>(false);

  constructor(private router: Router) {
    // Kiểm tra localStorage khi khởi động
    this.loadUserFromStorage();
  }

  private loadUserFromStorage() {
    // Tạm thời không load từ localStorage để demo giao diện
    // const userJson = localStorage.getItem('currentUser');
    // if (userJson) {
    //   const user = JSON.parse(userJson);
    //   this.currentUser.set(user);
    //   this.isLoggedIn.set(true);
    // }
    
    // Đảm bảo user chưa đăng nhập khi mở trang
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
    localStorage.removeItem('currentUser');
  }

  login(request: LoginRequest): Promise<boolean> {
    return new Promise((resolve) => {
      // TODO: Gọi API thực tế
      // Giả lập đăng nhập thành công
      setTimeout(() => {
        const mockUser: User = {
          id: 1,
          email: request.email,
          name: 'Nguyễn Văn A',
          phone: '0123456789',
          role: 'user',
          createdAt: new Date()
        };

        this.currentUser.set(mockUser);
        this.isLoggedIn.set(true);
        localStorage.setItem('currentUser', JSON.stringify(mockUser));
        resolve(true);
      }, 500);
    });
  }

  register(request: RegisterRequest): Promise<boolean> {
    return new Promise((resolve) => {
      // TODO: Gọi API thực tế
      // Giả lập đăng ký thành công
      setTimeout(() => {
        const mockUser: User = {
          id: Date.now(),
          email: request.email,
          name: request.name,
          phone: request.phone,
          role: 'user',
          createdAt: new Date()
        };

        this.currentUser.set(mockUser);
        this.isLoggedIn.set(true);
        localStorage.setItem('currentUser', JSON.stringify(mockUser));
        resolve(true);
      }, 500);
    });
  }

  logout() {
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
  }

  isAdmin(): boolean {
    return this.currentUser()?.role === 'admin';
  }
}
