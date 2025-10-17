import { Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home.component';
import { UserPitchesComponent } from './pages/user/user-pitches.component';
import { LoginComponent } from './pages/user/login.component';
import { RegisterComponent } from './pages/user/register.component';
import { PitchDetailComponent } from './pages/user/pitch-detail.component';
import { BookingComponent } from './pages/user/booking.component';

export const routes: Routes = [
  // Chỉ có routes cho user/khách hàng
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pitches', component: UserPitchesComponent },
  { path: 'pitch/:id', component: PitchDetailComponent },
  { path: 'booking', component: BookingComponent },
  
  { path: '**', redirectTo: '/home' }
];
