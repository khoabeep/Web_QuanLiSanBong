import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pitch } from '../../models/pitch.model';

@Component({
  selector: 'app-pitches',
  imports: [CommonModule, FormsModule],
  templateUrl: './pitches.component.html',
  styleUrls: ['./pitches.component.css']
})
export class PitchesComponent implements OnInit {
  pitches: Pitch[] = [];
  showModal = false;
  isEditMode = false;
  currentPitch: Pitch = this.getEmptyPitch();

  ngOnInit() {
    this.loadPitches();
  }

  loadPitches() {
    this.pitches = [
      { id: 1, name: 'Sân 1', type: '5 người', price: 300000, status: 'available', description: 'Sân cỏ nhân tạo chất lượng cao', image: '/assets/pitch1.jpg' },
      { id: 2, name: 'Sân 2', type: '7 người', price: 500000, status: 'available', description: 'Sân cỏ nhân tạo, có mái che', image: '/assets/pitch2.jpg' },
      { id: 3, name: 'Sân 3', type: '11 người', price: 800000, status: 'occupied', description: 'Sân cỏ tự nhiên, tiêu chuẩn thi đấu', image: '/assets/pitch3.jpg' },
      { id: 4, name: 'Sân 4', type: '5 người', price: 350000, status: 'available', description: 'Sân mới, có hệ thống đèn hiện đại', image: '/assets/pitch4.jpg' },
      { id: 5, name: 'Sân 5', type: '7 người', price: 550000, status: 'maintenance', description: 'Sân VIP, có phòng thay đồ riêng', image: '/assets/pitch5.jpg' },
    ];
  }

  getEmptyPitch(): Pitch {
    return {
      id: 0,
      name: '',
      type: '5 người',
      price: 0,
      status: 'available',
      description: '',
      image: ''
    };
  }

  openAddModal() {
    this.isEditMode = false;
    this.currentPitch = this.getEmptyPitch();
    this.showModal = true;
  }

  openEditModal(pitch: Pitch) {
    this.isEditMode = true;
    this.currentPitch = { ...pitch };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.currentPitch = this.getEmptyPitch();
  }

  savePitch() {
    if (this.isEditMode) {
      const index = this.pitches.findIndex(p => p.id === this.currentPitch.id);
      if (index !== -1) {
        this.pitches[index] = { ...this.currentPitch };
      }
    } else {
      this.currentPitch.id = Math.max(...this.pitches.map(p => p.id)) + 1;
      this.pitches.push({ ...this.currentPitch });
    }
    this.closeModal();
  }

  deletePitch(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa sân này?')) {
      this.pitches = this.pitches.filter(p => p.id !== id);
    }
  }

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      'available': 'Sẵn sàng',
      'occupied': 'Đang sử dụng',
      'maintenance': 'Bảo trì'
    };
    return statusMap[status] || status;
  }

  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'available': 'status-available',
      'occupied': 'status-occupied',
      'maintenance': 'status-maintenance'
    };
    return statusMap[status] || '';
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }
}
