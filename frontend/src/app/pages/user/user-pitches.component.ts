import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserHeaderComponent } from '../../components/user/user-header.component';
import { UserFooterComponent } from '../../components/user/user-footer.component';
import { Pitch } from '../../models/pitch.model';

@Component({
  selector: 'app-user-pitches',
  imports: [CommonModule, FormsModule, RouterLink, UserHeaderComponent, UserFooterComponent],
  templateUrl: './user-pitches.component.html',
  styleUrls: ['./user-pitches.component.css']
})
export class UserPitchesComponent implements OnInit {
  pitches: Pitch[] = [];
  filteredPitches: Pitch[] = [];
  
  searchQuery = '';
  selectedType = '';
  priceRange = 'all';
  sortBy = 'name';

  pitchTypes = ['5 người', '7 người', '11 người'];

  ngOnInit() {
    this.loadPitches();
  }

  loadPitches() {
    this.pitches = [
      { 
        id: 1, 
        name: 'Sân 1', 
        type: '5 người', 
        price: 300000, 
        status: 'available',
        description: 'Sân cỏ nhân tạo chất lượng cao, có mái che, đèn chiếu sáng hiện đại',
        image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=500'
      },
      { 
        id: 2, 
        name: 'Sân 2', 
        type: '7 người', 
        price: 500000, 
        status: 'available',
        description: 'Sân cỏ nhân tạo cao cấp, rộng rãi, thoáng mát',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500'
      },
      { 
        id: 3, 
        name: 'Sân 3', 
        type: '11 người', 
        price: 800000, 
        status: 'available',
        description: 'Sân cỏ tự nhiên tiêu chuẩn thi đấu, khán đài rộng',
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500'
      },
      { 
        id: 4, 
        name: 'Sân 4', 
        type: '5 người', 
        price: 350000, 
        status: 'available',
        description: 'Sân mới xây, cỏ mềm, có phòng thay đồ riêng',
        image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=500'
      },
      { 
        id: 5, 
        name: 'Sân VIP', 
        type: '7 người', 
        price: 600000, 
        status: 'available',
        description: 'Sân VIP cao cấp, có điều hòa, đầy đủ tiện nghi',
        image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=500'
      },
    ];
    this.applyFilters();
  }

  applyFilters() {
    let result = [...this.pitches];

    // Search
    if (this.searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.description?.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Type filter
    if (this.selectedType) {
      result = result.filter(p => p.type === this.selectedType);
    }

    // Price filter
    if (this.priceRange === 'low') {
      result = result.filter(p => p.price < 400000);
    } else if (this.priceRange === 'mid') {
      result = result.filter(p => p.price >= 400000 && p.price < 700000);
    } else if (this.priceRange === 'high') {
      result = result.filter(p => p.price >= 700000);
    }

    // Sort
    if (this.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    this.filteredPitches = result;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }

  getStatusText(status: string): string {
    return status === 'available' ? 'Còn trống' : 'Đã đặt';
  }
}
