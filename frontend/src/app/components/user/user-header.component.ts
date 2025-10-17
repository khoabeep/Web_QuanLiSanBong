import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent {
  authService = inject(AuthService);
  router = inject(Router);
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    this.authService.logout();
    this.showDropdown = false;
    this.router.navigate(['/home']);
  }
}
