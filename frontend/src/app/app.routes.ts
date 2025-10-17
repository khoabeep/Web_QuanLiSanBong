import { Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { UserPitchesComponent } from './pages/user/pitches/user-pitches.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { PitchDetailComponent } from './pages/user/pitch-detail/pitch-detail.component';
import { BookingComponent } from './pages/user/booking/booking.component';
import { AboutComponent } from './pages/user/about/about.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { TournamentsComponent } from './pages/user/tournaments/tournaments.component';
import { EquipmentComponent } from './pages/user/equipment/equipment.component';

export const routes: Routes = [
  // Chỉ có routes cho user/khách hàng
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pitches', component: UserPitchesComponent },
  { path: 'pitch/:id', component: PitchDetailComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'equipment', component: EquipmentComponent },
  
  { path: '**', redirectTo: '/home' }
];
