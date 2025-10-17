export interface Pitch {
  id: number;
  name: string;
  type: string; // '5 người', '7 người', '11 người'
  price: number;
  status: 'available' | 'occupied' | 'maintenance';
  image?: string;
  description?: string;
  facilities?: string[]; // Danh sách tiện ích
}
