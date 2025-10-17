import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserHeaderComponent } from '../../components/user/user-header.component';
import { UserFooterComponent } from '../../components/user/user-footer.component';
import { Pitch } from '../../models/pitch.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, UserHeaderComponent, UserFooterComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  currentStep = 1;
  selectedPitch: Pitch | null = null;
  
  bookingData = {
    pitchId: 0,
    date: '',
    timeSlot: '',
    duration: 1.5,
    customerName: '',
    phone: '',
    email: '',
    note: ''
  };

  pitches: Pitch[] = [
    {
      id: 1,
      name: 'Sân A1',
      type: 'Sân 5 người',
      price: 500000,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800'
    },
    {
      id: 2,
      name: 'Sân A2',
      type: 'Sân 7 người',
      price: 700000,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800'
    },
    {
      id: 3,
      name: 'Sân B1',
      type: 'Sân 5 người',
      price: 450000,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800'
    },
    {
      id: 4,
      name: 'Sân B2',
      type: 'Sân 11 người',
      price: 1000000,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800'
    }
  ];

  timeSlots = [
    '06:00 - 07:30',
    '07:30 - 09:00',
    '09:00 - 10:30',
    '10:30 - 12:00',
    '13:00 - 14:30',
    '14:30 - 16:00',
    '16:00 - 17:30',
    '17:30 - 19:00',
    '19:00 - 20:30',
    '20:30 - 22:00'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['pitchId']) {
        const pitchId = Number(params['pitchId']);
        this.selectPitch(pitchId);
        this.bookingData.pitchId = pitchId;
      }
    });
    
    // Set min date to today
    this.bookingData.date = this.getTodayDate();
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  selectPitch(pitchId: number) {
    this.selectedPitch = this.pitches.find(p => p.id === pitchId) || null;
    this.bookingData.pitchId = pitchId;
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  getTotalPrice(): number {
    if (!this.selectedPitch) return 0;
    const serviceFee = 20000;
    return this.selectedPitch.price * this.bookingData.duration + serviceFee;
  }

  submitBooking() {
    console.log('Booking data:', this.bookingData);
    alert('Đặt sân thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    this.router.navigate(['/home']);
  }
}
