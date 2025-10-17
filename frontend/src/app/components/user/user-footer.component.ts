import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-footer.component.html',
  styleUrl: './user-footer.component.css'
})
export class UserFooterComponent {}
