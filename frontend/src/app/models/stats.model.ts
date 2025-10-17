export interface DashboardStats {
  totalRevenue: number;
  todayBookings: number;
  totalPitches: number;
  activeCustomers: number;
  revenueGrowth: number;
  bookingGrowth: number;
}

export interface RevenueData {
  date: string;
  revenue: number;
}
