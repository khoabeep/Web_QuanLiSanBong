import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserHeaderComponent } from '../../../components/user/user-header.component';
import { UserFooterComponent } from '../../../components/user/user-footer.component';
import { Pitch } from '../../../models/pitch.model';

@Component({
  selector: 'app-pitch-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, UserHeaderComponent, UserFooterComponent],
  templateUrl: './pitch-detail.component.html',
  styleUrl: './pitch-detail.component.css'
})
export class PitchDetailComponent implements OnInit {
  pitch: Pitch | null = null;
  selectedImage = 0;
  
  // Mock data - trong thực tế sẽ lấy từ API
  pitches: Pitch[] = [
    {
      id: 1,
      name: 'Sân A1',
      type: 'Sân 5 người',
      price: 500000,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800',
      facilities: ['Đèn chiếu sáng', 'Phòng thay đồ', 'Bãi đỗ xe', 'Nước uống miễn phí']
    },
    {
      id: 2,
      name: 'Sân A2',
      type: 'Sân 7 người',
      price: 700000,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800',
      facilities: ['Đèn chiếu sáng', 'Phòng thay đồ', 'Bãi đỗ xe', 'Wi-Fi', 'Canteen']
    },
    {
      id: 3,
      name: 'Sân B1',
      type: 'Sân 5 người',
      price: 450000,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800',
      facilities: ['Đèn chiếu sáng', 'Phòng thay đồ', 'Bãi đỗ xe']
    },
    {
      id: 4,
      name: 'Sân B2',
      type: 'Sân 11 người',
      price: 1000000,
      status: 'occupied',
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800',
      facilities: ['Đèn chiếu sáng', 'Phòng thay đồ', 'Bãi đỗ xe', 'Wi-Fi', 'Canteen', 'Khán đài']
    }
  ];

  galleryImages = [
    'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800',
    'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800',
    'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800',
    'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800'
  ];

  timeSlots = [
    { time: '06:00 - 07:30', available: true },
    { time: '07:30 - 09:00', available: true },
    { time: '09:00 - 10:30', available: false },
    { time: '10:30 - 12:00', available: true },
    { time: '13:00 - 14:30', available: true },
    { time: '14:30 - 16:00', available: true },
    { time: '16:00 - 17:30', available: false },
    { time: '17:30 - 19:00', available: true },
    { time: '19:00 - 20:30', available: true },
    { time: '20:30 - 22:00', available: true }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pitch = this.pitches.find(p => p.id === id) || null;
    
    if (!this.pitch) {
      this.router.navigate(['/pitches']);
    }
  }

  selectImage(index: number) {
    this.selectedImage = index;
  }

  bookNow() {
    this.router.navigate(['/booking'], { queryParams: { pitchId: this.pitch?.id } });
  }

  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}
