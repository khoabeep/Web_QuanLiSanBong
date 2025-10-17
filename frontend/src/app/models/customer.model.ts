export interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string;
  address?: string;
  totalBookings: number;
  totalSpent: number;
  registeredDate: string;
}
