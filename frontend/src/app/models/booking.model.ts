export interface Booking {
  id: number;
  pitchId: number;
  pitchName: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  date: string;
  timeSlot: string;
  duration: number; // hours
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  notes?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  price: number;
}
