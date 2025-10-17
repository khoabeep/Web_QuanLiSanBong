export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
}
