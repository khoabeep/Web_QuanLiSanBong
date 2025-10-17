import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pitch } from '../../models/pitch.model';
import { TimeSlot } from '../../models/booking.model';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  pitches: Pitch[] = [];
  selectedDate: string = '';
  selectedPitch: Pitch | null = null;
  selectedTimeSlot: string = '';
  
  customerName: string = '';
  customerPhone: string = '';
  customerEmail: string = '';
  notes: string = '';

  timeSlots: TimeSlot[] = [
    { time: '06:00 - 08:00', available: true, price: 200000 },
    { time: '08:00 - 10:00', available: true, price: 250000 },
    { time: '10:00 - 12:00', available: false, price: 300000 },
    { time: '14:00 - 16:00', available: true, price: 300000 },
    { time: '16:00 - 18:00', available: true, price: 400000 },
    { time: '18:00 - 20:00', available: false, price: 500000 },
    { time: '20:00 - 22:00', available: true, price: 500000 },
  ];

  ngOnInit() {
    this.loadPitches();
    this.setDefaultDate();
  }

  loadPitches() {
    this.pitches = [
      { id: 1, name: 'Sân 1', type: '5 người', price: 300000, status: 'available' },
      { id: 2, name: 'Sân 2', type: '7 người', price: 500000, status: 'available' },
      { id: 3, name: 'Sân 3', type: '11 người', price: 800000, status: 'available' },
      { id: 4, name: 'Sân 4', type: '5 người', price: 350000, status: 'available' },
    ];
  }

  setDefaultDate() {
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];
  }

  selectPitch(pitch: Pitch) {
    this.selectedPitch = pitch;
    this.selectedTimeSlot = '';
  }

  selectTimeSlot(timeSlot: TimeSlot) {
    if (timeSlot.available) {
      this.selectedTimeSlot = timeSlot.time;
    }
  }

  getTotalPrice(): number {
    const slot = this.timeSlots.find(ts => ts.time === this.selectedTimeSlot);
    return slot ? slot.price : 0;
  }

  canSubmit(): boolean {
    return !!(this.selectedPitch && this.selectedTimeSlot && this.customerName && this.customerPhone);
  }

  submitBooking() {
    if (!this.canSubmit()) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    const booking = {
      pitch: this.selectedPitch,
      date: this.selectedDate,
      timeSlot: this.selectedTimeSlot,
      customer: {
        name: this.customerName,
        phone: this.customerPhone,
        email: this.customerEmail
      },
      notes: this.notes,
      totalPrice: this.getTotalPrice()
    };

    console.log('Booking:', booking);
    alert('Đặt sân thành công! Chúng tôi sẽ liên hệ với bạn để xác nhận.');
    this.resetForm();
  }

  resetForm() {
    this.selectedPitch = null;
    this.selectedTimeSlot = '';
    this.customerName = '';
    this.customerPhone = '';
    this.customerEmail = '';
    this.notes = '';
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }
}
