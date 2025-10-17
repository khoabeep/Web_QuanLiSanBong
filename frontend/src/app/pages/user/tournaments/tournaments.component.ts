import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserHeaderComponent } from '../../../components/user/user-header.component';
import { UserFooterComponent } from '../../../components/user/user-footer.component';

interface Tournament {
  id: number;
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
  teamCount: number;
  maxTeams: number;
  prize: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'registration';
  registrationDeadline: string;
  format: string;
  entryFee: number;
}

@Component({
  selector: 'app-tournaments',
  imports: [CommonModule, RouterLink, FormsModule, UserHeaderComponent, UserFooterComponent],
  template: `
    <app-user-header />
    
    <div class="tournaments-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Giải Đấu Bóng Đá</h1>
          <p>Tham gia các giải đấu sôi động, giao lưu và thể hiện kỹ năng của bạn</p>
        </div>
      </section>

      <div class="container">
        <!-- Filter Tabs -->
        <div class="filter-tabs">
          <button 
            [class.active]="activeFilter === 'all'" 
            (click)="filterTournaments('all')"
          >
            Tất cả
          </button>
          <button 
            [class.active]="activeFilter === 'registration'" 
            (click)="filterTournaments('registration')"
          >
            Đang nhận đăng ký
          </button>
          <button 
            [class.active]="activeFilter === 'upcoming'" 
            (click)="filterTournaments('upcoming')"
          >
            Sắp diễn ra
          </button>
          <button 
            [class.active]="activeFilter === 'ongoing'" 
            (click)="filterTournaments('ongoing')"
          >
            Đang diễn ra
          </button>
          <button 
            [class.active]="activeFilter === 'completed'" 
            (click)="filterTournaments('completed')"
          >
            Đã kết thúc
          </button>
        </div>

        <!-- Tournaments Grid -->
        <div class="tournaments-grid">
          @for (tournament of filteredTournaments; track tournament.id) {
            <div class="tournament-card">
              <div class="tournament-image">
                <img [src]="tournament.image" [alt]="tournament.name" />
                <div class="status-badge" [class]="tournament.status">
                  {{ getStatusText(tournament.status) }}
                </div>
              </div>
              
              <div class="tournament-content">
                <h3>{{ tournament.name }}</h3>
                <p class="description">{{ tournament.description }}</p>
                
                <div class="tournament-info">
                  <div class="info-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>{{ tournament.startDate }} - {{ tournament.endDate }}</span>
                  </div>
                  
                  <div class="info-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{{ tournament.location }}</span>
                  </div>
                  
                  <div class="info-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>{{ tournament.teamCount }}/{{ tournament.maxTeams }} đội</span>
                  </div>
                  
                  <div class="info-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    <span>{{ tournament.format }}</span>
                  </div>
                </div>
                
                <div class="tournament-prize">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"/>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                  </svg>
                  <div>
                    <div class="prize-label">Giải thưởng</div>
                    <div class="prize-value">{{ tournament.prize }}</div>
                  </div>
                </div>
                
                <div class="tournament-footer">
                  <div class="entry-fee">
                    <span class="fee-label">Lệ phí:</span>
                    <span class="fee-value">{{ formatCurrency(tournament.entryFee) }}</span>
                  </div>
                  @if (tournament.status === 'registration') {
                    <button class="btn-register">Đăng ký ngay</button>
                  } @else if (tournament.status === 'ongoing' || tournament.status === 'completed') {
                    <button class="btn-view" [routerLink]="['/tournament', tournament.id]">Xem chi tiết</button>
                  } @else {
                    <button class="btn-disabled" disabled>Hết hạn đăng ký</button>
                  }
                </div>
                
                @if (tournament.status === 'registration') {
                  <div class="deadline-notice">
                    ⏰ Hạn đăng ký: {{ tournament.registrationDeadline }}
                  </div>
                }
              </div>
            </div>
          }
        </div>

        @if (filteredTournaments.length === 0) {
          <div class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <h3>Không tìm thấy giải đấu</h3>
            <p>Hiện tại không có giải đấu nào trong danh mục này</p>
          </div>
        }

        <!-- Info Section -->
        <section class="info-section">
          <h2>Thông Tin Đăng Ký Giải Đấu</h2>
          <div class="info-grid">
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h3>Điều Kiện Tham Gia</h3>
              <ul>
                <li>Đội tối thiểu 7 người, tối đa 15 người</li>
                <li>Tuổi từ 16 trở lên</li>
                <li>Có giấy tờ tùy thân hợp lệ</li>
                <li>Chấp hành đầy đủ nội quy giải đấu</li>
              </ul>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Quy Trình Đăng Ký</h3>
              <ul>
                <li>1. Điền form đăng ký online</li>
                <li>2. Nộp lệ phí tham gia</li>
                <li>3. Nhận xác nhận qua email/SMS</li>
                <li>4. Tham dự họp kỹ thuật trước giải</li>
              </ul>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Quyền Lợi</h3>
              <ul>
                <li>Được cấp áo đấu miễn phí</li>
                <li>Bảo hiểm tai nạn trong giải</li>
                <li>Giải thưởng hấp dẫn</li>
                <li>Cơ hội giao lưu, kết nối</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>

    <app-user-footer />
  `,
  styles: [`
    .tournaments-page {
      min-height: 100vh;
      background: #f9fafb;
    }

    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 80px 0;
      text-align: center;
      color: white;
    }

    .hero-content h1 {
      font-size: 48px;
      font-weight: 800;
      margin-bottom: 16px;
    }

    .hero-content p {
      font-size: 20px;
      opacity: 0.95;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 48px 24px;
    }

    .filter-tabs {
      display: flex;
      gap: 12px;
      margin-bottom: 32px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .filter-tabs button {
      padding: 12px 24px;
      border: 2px solid #e5e7eb;
      background: white;
      color: #6b7280;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .filter-tabs button:hover {
      border-color: #667eea;
      color: #667eea;
    }

    .filter-tabs button.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: transparent;
    }

    .tournaments-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 32px;
      margin-bottom: 64px;
    }

    .tournament-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
      transition: all 0.3s;
    }

    .tournament-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .tournament-image {
      position: relative;
      height: 220px;
      overflow: hidden;
    }

    .tournament-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .status-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .status-badge.registration {
      background: #10b981;
      color: white;
    }

    .status-badge.upcoming {
      background: #3b82f6;
      color: white;
    }

    .status-badge.ongoing {
      background: #f59e0b;
      color: white;
    }

    .status-badge.completed {
      background: #6b7280;
      color: white;
    }

    .tournament-content {
      padding: 24px;
    }

    .tournament-content h3 {
      font-size: 22px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .description {
      color: #6b7280;
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .tournament-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e5e7eb;
    }

    .info-row {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #4b5563;
      font-size: 14px;
    }

    .info-row svg {
      color: #667eea;
      flex-shrink: 0;
    }

    .tournament-prize {
      display: flex;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 16px;
      border-radius: 12px;
      margin-bottom: 20px;
    }

    .tournament-prize svg {
      color: #f59e0b;
      flex-shrink: 0;
    }

    .prize-label {
      font-size: 13px;
      color: #92400e;
      font-weight: 600;
    }

    .prize-value {
      font-size: 18px;
      font-weight: 800;
      color: #b45309;
    }

    .tournament-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    .entry-fee {
      display: flex;
      flex-direction: column;
    }

    .fee-label {
      font-size: 13px;
      color: #6b7280;
    }

    .fee-value {
      font-size: 18px;
      font-weight: 700;
      color: #1f2937;
    }

    .btn-register, .btn-view, .btn-disabled {
      padding: 12px 24px;
      border-radius: 10px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 15px;
    }

    .btn-register {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
    }

    .btn-register:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
    }

    .btn-view {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .btn-view:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .btn-disabled {
      background: #e5e7eb;
      color: #9ca3af;
      cursor: not-allowed;
    }

    .deadline-notice {
      margin-top: 12px;
      padding: 10px;
      background: #fef2f2;
      border-left: 4px solid #ef4444;
      border-radius: 6px;
      color: #991b1b;
      font-size: 13px;
      font-weight: 600;
    }

    .empty-state {
      text-align: center;
      padding: 80px 20px;
    }

    .empty-state svg {
      color: #d1d5db;
      margin-bottom: 24px;
    }

    .empty-state h3 {
      font-size: 24px;
      color: #374151;
      margin-bottom: 8px;
    }

    .empty-state p {
      color: #6b7280;
      font-size: 16px;
    }

    .info-section {
      margin-top: 64px;
      padding: 48px;
      background: white;
      border-radius: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    }

    .info-section h2 {
      text-align: center;
      font-size: 32px;
      font-weight: 800;
      color: #1f2937;
      margin-bottom: 40px;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
    }

    .info-card {
      padding: 32px;
      border: 2px solid #e5e7eb;
      border-radius: 16px;
      transition: all 0.3s;
    }

    .info-card:hover {
      border-color: #667eea;
      box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
    }

    .info-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }

    .info-icon svg {
      color: white;
    }

    .info-card h3 {
      font-size: 20px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 16px;
    }

    .info-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .info-card ul li {
      padding: 8px 0;
      color: #4b5563;
      font-size: 15px;
      line-height: 1.6;
      position: relative;
      padding-left: 24px;
    }

    .info-card ul li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: 700;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 32px;
      }

      .hero-content p {
        font-size: 16px;
      }

      .tournaments-grid {
        grid-template-columns: 1fr;
      }

      .info-section {
        padding: 32px 24px;
      }

      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TournamentsComponent implements OnInit {
  tournaments: Tournament[] = [];
  filteredTournaments: Tournament[] = [];
  activeFilter: string = 'all';

  ngOnInit() {
    this.loadTournaments();
    this.filteredTournaments = this.tournaments;
  }

  loadTournaments() {
    this.tournaments = [
      {
        id: 1,
        name: 'Giải Bóng Đá Mini Mùa Xuân 2025',
        description: 'Giải đấu lớn nhất năm dành cho các đội nghiệp dư, quy tụ các tài năng trẻ',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop',
        startDate: '15/03/2025',
        endDate: '30/04/2025',
        location: 'Sân Mini Football - Quận 1',
        teamCount: 12,
        maxTeams: 16,
        prize: '50.000.000 VNĐ',
        status: 'registration',
        registrationDeadline: '28/02/2025',
        format: 'Vòng tròn + Loại trực tiếp',
        entryFee: 3000000
      },
      {
        id: 2,
        name: 'Cúp Văn Phòng 2025',
        description: 'Giải đấu dành riêng cho các đội bóng công sở, tăng cường sức khỏe và gắn kết',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
        startDate: '01/04/2025',
        endDate: '15/05/2025',
        location: 'Sân Mini Football - Quận 3',
        teamCount: 8,
        maxTeams: 12,
        prize: '30.000.000 VNĐ',
        status: 'registration',
        registrationDeadline: '15/03/2025',
        format: 'Chia bảng + Playoff',
        entryFee: 2000000
      },
      {
        id: 3,
        name: 'Giải Thiếu Niên U17',
        description: 'Sân chơi bổ ích cho các cầu thủ nhí, phát triển tài năng trẻ',
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop',
        startDate: '10/05/2025',
        endDate: '25/06/2025',
        location: 'Sân Mini Football - Quận 7',
        teamCount: 16,
        maxTeams: 20,
        prize: '20.000.000 VNĐ + Học bổng',
        status: 'upcoming',
        registrationDeadline: '25/04/2025',
        format: 'Loại trực tiếp',
        entryFee: 1500000
      },
      {
        id: 4,
        name: 'Giải Bóng Đá Đêm - Summer Cup',
        description: 'Giải đấu đặc biệt diễn ra vào buổi tối mùa hè, không khí sôi động',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop',
        startDate: '01/06/2025',
        endDate: '31/07/2025',
        location: 'Sân Mini Football - Quận 2',
        teamCount: 0,
        maxTeams: 16,
        prize: '40.000.000 VNĐ',
        status: 'upcoming',
        registrationDeadline: '15/05/2025',
        format: 'Vòng bảng + Knockout',
        entryFee: 2500000
      },
      {
        id: 5,
        name: 'Giải Bóng Đá Truyền Thống 2024',
        description: 'Giải đấu thường niên quy tụ các đội mạnh, đã kết thúc với nhiều pha bóng đẹp',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=400&fit=crop',
        startDate: '01/10/2024',
        endDate: '30/11/2024',
        location: 'Sân Mini Football - Quận 1',
        teamCount: 16,
        maxTeams: 16,
        prize: '60.000.000 VNĐ',
        status: 'completed',
        registrationDeadline: '15/09/2024',
        format: 'Vòng tròn + Bán kết + Chung kết',
        entryFee: 3500000
      },
      {
        id: 6,
        name: 'Giải Giao Hữu Cuối Năm 2024',
        description: 'Giải đấu giao hữu ấm áp mừng năm mới, đã diễn ra thành công rực rỡ',
        image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop',
        startDate: '15/12/2024',
        endDate: '31/12/2024',
        location: 'Sân Mini Football - Quận 5',
        teamCount: 10,
        maxTeams: 10,
        prize: '15.000.000 VNĐ + Quà tặng',
        status: 'completed',
        registrationDeadline: '01/12/2024',
        format: 'Giao hữu vòng tròn',
        entryFee: 1000000
      }
    ];
  }

  filterTournaments(status: string) {
    this.activeFilter = status;
    if (status === 'all') {
      this.filteredTournaments = this.tournaments;
    } else {
      this.filteredTournaments = this.tournaments.filter(t => t.status === status);
    }
  }

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      'registration': 'Đang nhận đăng ký',
      'upcoming': 'Sắp diễn ra',
      'ongoing': 'Đang diễn ra',
      'completed': 'Đã kết thúc'
    };
    return statusMap[status] || status;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  }
}
