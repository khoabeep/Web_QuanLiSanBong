import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserHeaderComponent } from '../../../components/user/user-header.component';
import { UserFooterComponent } from '../../../components/user/user-footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, UserHeaderComponent, UserFooterComponent],
  template: `
    <app-user-header />

    <div class="about-page">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="container">
          <h1>Về Chúng Tôi</h1>
          <p>Đam mê bóng đá - Chất lượng hàng đầu</p>
        </div>
      </section>

      <!-- Story Section -->
      <section class="story-section">
        <div class="container">
          <div class="content-grid">
            <div class="text-content">
              <h2>Câu chuyện của chúng tôi</h2>
              <p>
                Được thành lập từ năm 2020, Mini Football bắt đầu từ niềm đam mê bóng đá 
                và mong muốn tạo ra một không gian chơi bóng chuyên nghiệp, hiện đại 
                cho cộng đồng yêu thích môn thể thao vua.
              </p>
              <p>
                Với hệ thống 5 sân bóng đạt tiêu chuẩn quốc tế, được trang bị cỏ nhân tạo 
                cao cấp và hệ thống đèn chiếu sáng hiện đại, chúng tôi cam kết mang đến 
                trải nghiệm tuyệt vời nhất cho mọi trận đấu của bạn.
              </p>
            </div>
            <div class="image-content">
              <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600" alt="Our Story">
            </div>
          </div>
        </div>
      </section>

      <!-- Vision Mission -->
      <section class="vision-section">
        <div class="container">
          <div class="cards-grid">
            <div class="vision-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <h3>Tầm nhìn</h3>
              <p>Trở thành hệ thống sân bóng mini hàng đầu Việt Nam, nơi mọi người đều có thể tận hưởng niềm vui bóng đá.</p>
            </div>
            
            <div class="vision-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Sứ mệnh</h3>
              <p>Cung cấp sân bóng chất lượng cao với dịch vụ tốt nhất, góp phần phát triển phong trào bóng đá cộng đồng.</p>
            </div>
            
            <div class="vision-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Giá trị cốt lõi</h3>
              <p>Chất lượng - Uy tín - Chuyên nghiệp - Tận tâm với khách hàng</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Khách hàng thân thiết</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">5</div>
              <div class="stat-label">Sân bóng chuyên nghiệp</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">1000+</div>
              <div class="stat-label">Trận đấu mỗi tháng</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">4.8★</div>
              <div class="stat-label">Đánh giá từ khách hàng</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <div class="container">
          <h2 class="section-title">Đội ngũ của chúng tôi</h2>
          <p class="section-subtitle">Những con người đầy nhiệt huyết và chuyên nghiệp</p>
          
          <div class="team-grid">
            <div class="team-card">
              <div class="team-avatar">
                <img src="https://i.pravatar.cc/200?img=12" alt="Team member">
              </div>
              <h3>Nguyễn Văn A</h3>
              <p class="role">Giám đốc điều hành</p>
              <p class="bio">10+ năm kinh nghiệm trong ngành thể thao</p>
            </div>
            
            <div class="team-card">
              <div class="team-avatar">
                <img src="https://i.pravatar.cc/200?img=32" alt="Team member">
              </div>
              <h3>Trần Thị B</h3>
              <p class="role">Quản lý vận hành</p>
              <p class="bio">Chuyên gia về quản lý sân thể thao</p>
            </div>
            
            <div class="team-card">
              <div class="team-avatar">
                <img src="https://i.pravatar.cc/200?img=51" alt="Team member">
              </div>
              <h3>Lê Văn C</h3>
              <p class="role">Trưởng phòng kỹ thuật</p>
              <p class="bio">Đảm bảo chất lượng sân bóng tốt nhất</p>
            </div>
            
            <div class="team-card">
              <div class="team-avatar">
                <img src="https://i.pravatar.cc/200?img=44" alt="Team member">
              </div>
              <h3>Phạm Thị D</h3>
              <p class="role">Trưởng phòng CSKH</p>
              <p class="bio">Luôn lắng nghe và phục vụ khách hàng</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <h2>Sẵn sàng trải nghiệm?</h2>
          <p>Đặt sân ngay hôm nay và cảm nhận sự khác biệt</p>
          <a routerLink="/pitches" class="btn-cta">
            Xem danh sách sân
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </section>
    </div>

    <app-user-footer />
  `,
  styles: [`
    .about-page {
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .about-hero {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      padding: 100px 0 80px;
      text-align: center;
    }

    .about-hero h1 {
      font-size: 48px;
      font-weight: 800;
      margin-bottom: 16px;
    }

    .about-hero p {
      font-size: 20px;
      opacity: 0.95;
    }

    .story-section {
      padding: 80px 0;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .text-content h2 {
      font-size: 36px;
      font-weight: 800;
      color: #1f2937;
      margin-bottom: 24px;
    }

    .text-content p {
      color: #6b7280;
      line-height: 1.8;
      font-size: 16px;
      margin-bottom: 16px;
    }

    .image-content img {
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }

    .vision-section {
      background: #f9fafb;
      padding: 80px 0;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }

    .vision-card {
      background: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: all 0.3s;
    }

    .vision-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(16, 185, 129, 0.2);
    }

    .vision-card .icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      color: white;
    }

    .vision-card h3 {
      font-size: 24px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 16px;
    }

    .vision-card p {
      color: #6b7280;
      line-height: 1.7;
      font-size: 15px;
    }

    .stats-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 48px;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 16px;
      opacity: 0.9;
    }

    .team-section {
      padding: 80px 0;
      background: white;
    }

    .section-title {
      font-size: 36px;
      font-weight: 800;
      text-align: center;
      color: #1f2937;
      margin-bottom: 12px;
    }

    .section-subtitle {
      text-align: center;
      color: #6b7280;
      font-size: 18px;
      margin-bottom: 60px;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
    }

    .team-card {
      text-align: center;
      padding: 24px;
      border-radius: 16px;
      transition: all 0.3s;
    }

    .team-card:hover {
      background: #f9fafb;
      transform: translateY(-4px);
    }

    .team-avatar {
      width: 120px;
      height: 120px;
      margin: 0 auto 20px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid #10b981;
    }

    .team-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .team-card h3 {
      font-size: 18px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 6px;
    }

    .team-card .role {
      color: #10b981;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 12px;
    }

    .team-card .bio {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.6;
    }

    .cta-section {
      padding: 80px 0;
      background: #f9fafb;
      text-align: center;
    }

    .cta-section h2 {
      font-size: 36px;
      font-weight: 800;
      color: #1f2937;
      margin-bottom: 16px;
    }

    .cta-section p {
      color: #6b7280;
      font-size: 18px;
      margin-bottom: 32px;
    }

    .btn-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 40px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 700;
      font-size: 16px;
      transition: all 0.3s;
    }

    .btn-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
    }

    @media (max-width: 1024px) {
      .content-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .cards-grid {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .team-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .about-hero h1 {
        font-size: 32px;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .team-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {}
