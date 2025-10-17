import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
  badge?: number;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Trang chủ', route: '/dashboard' },
    { icon: 'pitch', label: 'Quản lý sân', route: '/pitches' },
    { icon: 'booking', label: 'Đặt sân', route: '/booking' },
    { icon: 'bookings', label: 'Quản lý đặt sân', route: '/bookings', badge: 5 },
    { icon: 'customers', label: 'Khách hàng', route: '/customers' },
    { icon: 'stats', label: 'Báo cáo', route: '/reports' },
  ];
}
