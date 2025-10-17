import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStats } from '../../models/stats.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats: DashboardStats = {
    totalRevenue: 0,
    todayBookings: 0,
    totalPitches: 0,
    activeCustomers: 0,
    revenueGrowth: 0,
    bookingGrowth: 0
  };

  recentBookings = [
    { id: 1, customer: 'Nguyễn Văn A', pitch: 'Sân 1 - 5 người', time: '14:00 - 16:00', date: '2025-10-15', status: 'confirmed', price: 300000 },
    { id: 2, customer: 'Trần Thị B', pitch: 'Sân 2 - 7 người', time: '16:00 - 18:00', date: '2025-10-15', status: 'pending', price: 500000 },
    { id: 3, customer: 'Lê Văn C', pitch: 'Sân 3 - 11 người', time: '18:00 - 20:00', date: '2025-10-15', status: 'confirmed', price: 800000 },
    { id: 4, customer: 'Phạm Thị D', pitch: 'Sân 1 - 5 người', time: '20:00 - 22:00', date: '2025-10-15', status: 'completed', price: 350000 },
  ];

  todaySchedule = [
    { time: '06:00 - 08:00', pitch: 'Sân 1', customer: 'CLB Đông Á', status: 'confirmed' },
    { time: '14:00 - 16:00', pitch: 'Sân 2', customer: 'Nguyễn Văn A', status: 'confirmed' },
    { time: '16:00 - 18:00', pitch: 'Sân 1', customer: 'Trần Thị B', status: 'pending' },
    { time: '18:00 - 20:00', pitch: 'Sân 3', customer: 'Lê Văn C', status: 'confirmed' },
    { time: '20:00 - 22:00', pitch: 'Sân 2', customer: 'CLB Phương Nam', status: 'confirmed' },
  ];

  ngOnInit() {
    this.loadStats();
  }

  loadStats() {
    // Simulate loading data
    this.stats = {
      totalRevenue: 45200000,
      todayBookings: 12,
      totalPitches: 5,
      activeCustomers: 248,
      revenueGrowth: 12.5,
      bookingGrowth: 8.3
    };
  }

  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'confirmed': 'status-confirmed',
      'pending': 'status-pending',
      'completed': 'status-completed',
      'cancelled': 'status-cancelled'
    };
    return statusMap[status] || '';
  }

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      'confirmed': 'Đã xác nhận',
      'pending': 'Chờ xác nhận',
      'completed': 'Hoàn thành',
      'cancelled': 'Đã hủy'
    };
    return statusMap[status] || status;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }
}
