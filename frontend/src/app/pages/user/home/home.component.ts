import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserHeaderComponent } from '../../../components/user/user-header.component';
import { UserFooterComponent } from '../../../components/user/user-footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, UserHeaderComponent, UserFooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPitches = [
    { 
      id: 1, 
      name: 'Sân 1', 
      type: '5 người', 
      price: 300000, 
      image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=500',
      rating: 4.8,
      reviews: 128
    },
    { 
      id: 2, 
      name: 'Sân 2', 
      type: '7 người', 
      price: 500000, 
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500',
      rating: 4.9,
      reviews: 156
    },
    { 
      id: 3, 
      name: 'Sân 3', 
      type: '11 người', 
      price: 800000, 
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500',
      rating: 4.7,
      reviews: 98
    },
  ];

  features = [
    {
      icon: 'clock',
      title: 'Đặt sân 24/7',
      description: 'Hệ thống đặt sân online nhanh chóng, tiện lợi mọi lúc mọi nơi'
    },
    {
      icon: 'shield',
      title: 'Chất lượng đảm bảo',
      description: 'Sân cỏ nhân tạo cao cấp, đạt tiêu chuẩn quốc tế'
    },
    {
      icon: 'dollar',
      title: 'Giá cả hợp lý',
      description: 'Mức giá phải chăng, nhiều ưu đãi hấp dẫn'
    },
    {
      icon: 'users',
      title: 'Phục vụ tận tâm',
      description: 'Đội ngũ nhân viên chuyên nghiệp, nhiệt tình'
    }
  ];

  testimonials = [
    {
      name: 'Nguyễn Văn A',
      avatar: 'A',
      rating: 5,
      comment: 'Sân đẹp, sạch sẽ, nhân viên phục vụ tốt. Giá cả hợp lý, sẽ quay lại!',
      date: '2 ngày trước'
    },
    {
      name: 'Trần Thị B',
      avatar: 'B',
      rating: 5,
      comment: 'Đặt sân online rất tiện, không phải chờ đợi. Sân chất lượng tốt!',
      date: '1 tuần trước'
    },
    {
      name: 'Lê Văn C',
      avatar: 'C',
      rating: 4,
      comment: 'Sân rộng rãi, thoáng mát. Có đầy đủ tiện nghi. Rất hài lòng!',
      date: '2 tuần trước'
    }
  ];

  ngOnInit() {}

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }
}
