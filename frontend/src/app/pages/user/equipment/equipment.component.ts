import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserHeaderComponent } from '../../../components/user/user-header.component';
import { UserFooterComponent } from '../../../components/user/user-footer.component';

interface Equipment {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  priceUnit: string;
  category: 'ball' | 'shoes' | 'clothing' | 'protection' | 'accessories';
  stock: number;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-equipment',
  imports: [CommonModule, FormsModule, UserHeaderComponent, UserFooterComponent],
  template: `
    <app-user-header />
    
    <div class="equipment-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Cho Thuê Trang Thiết Bị</h1>
          <p>Đầy đủ thiết bị chất lượng cao cho trải nghiệm bóng đá hoàn hảo</p>
        </div>
      </section>

      <div class="container">
        <!-- Category Filter -->
        <div class="category-filter">
          <button 
            [class.active]="activeCategory === 'all'" 
            (click)="filterByCategory('all')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            Tất cả
          </button>
          <button 
            [class.active]="activeCategory === 'ball'" 
            (click)="filterByCategory('ball')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
            Bóng đá
          </button>
          <button 
            [class.active]="activeCategory === 'shoes'" 
            (click)="filterByCategory('shoes')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 17.5c0 1.4 1.1 2.5 2.5 2.5h15c1.4 0 2.5-1.1 2.5-2.5V12H2v5.5z"/>
              <path d="M2 12l4-8h12l4 8"/>
            </svg>
            Giày
          </button>
          <button 
            [class.active]="activeCategory === 'clothing'" 
            (click)="filterByCategory('clothing')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
            </svg>
            Quần áo
          </button>
          <button 
            [class.active]="activeCategory === 'protection'" 
            (click)="filterByCategory('protection')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Bảo hộ
          </button>
          <button 
            [class.active]="activeCategory === 'accessories'" 
            (click)="filterByCategory('accessories')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="7"/>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
            </svg>
            Phụ kiện
          </button>
        </div>

        <!-- Equipment Grid -->
        <div class="equipment-grid">
          @for (item of filteredEquipment; track item.id) {
            <div class="equipment-card">
              <div class="equipment-image">
                <img [src]="item.image" [alt]="item.name" />
                @if (item.stock < 5) {
                  <div class="stock-badge low">Sắp hết</div>
                } @else {
                  <div class="stock-badge available">Còn hàng</div>
                }
              </div>
              
              <div class="equipment-content">
                <h3>{{ item.name }}</h3>
                <p class="description">{{ item.description }}</p>
                
                <div class="rating">
                  <div class="stars">
                    @for (star of [1,2,3,4,5]; track star) {
                      @if (star <= item.rating) {
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      } @else {
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      }
                    }
                  </div>
                  <span class="reviews">({{ item.reviews }} đánh giá)</span>
                </div>
                
                <div class="equipment-footer">
                  <div class="price-section">
                    <div class="price">{{ formatCurrency(item.price) }}</div>
                    <div class="price-unit">{{ item.priceUnit }}</div>
                  </div>
                  <button class="btn-rent">Thuê ngay</button>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Rental Info Section -->
        <section class="rental-info">
          <h2>Chính Sách Cho Thuê</h2>
          <div class="info-grid">
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Thời Gian Thuê</h3>
              <p>Tối thiểu 1 giờ, tối đa cả ngày. Giảm giá khi thuê dài hạn hoặc gói combo</p>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v20M2 12h20"/>
                </svg>
              </div>
              <h3>Đặt Cọc</h3>
              <p>Cọc 30% giá trị thiết bị. Hoàn lại 100% nếu trả đúng hạn và không hư hỏng</p>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Bảo Đảm Chất Lượng</h3>
              <p>Thiết bị được kiểm tra kỹ lưỡng, vệ sinh sạch sẽ trước khi giao cho khách</p>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <h3>Giao Nhận Linh Hoạt</h3>
              <p>Nhận tại sân hoặc giao tận nơi (phí giao hàng tùy khu vực)</p>
            </div>
          </div>
        </section>

        <!-- Packages Section -->
        <section class="packages-section">
          <h2>Gói Combo Tiết Kiệm</h2>
          <div class="packages-grid">
            <div class="package-card">
              <div class="package-header">
                <h3>Gói Basic</h3>
                <div class="package-price">
                  <span class="price">150.000đ</span>
                  <span class="unit">/người</span>
                </div>
              </div>
              <ul class="package-features">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Bóng đá chất lượng cao
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Áo số cơ bản
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Nước uống miễn phí
                </li>
              </ul>
              <button class="btn-package">Chọn gói</button>
            </div>

            <div class="package-card featured">
              <div class="popular-badge">Phổ biến</div>
              <div class="package-header">
                <h3>Gói Standard</h3>
                <div class="package-price">
                  <span class="price">250.000đ</span>
                  <span class="unit">/người</span>
                </div>
              </div>
              <ul class="package-features">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Bóng đá chính hãng
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Bộ đồ thi đấu đầy đủ
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Giày đá bóng chuyên dụng
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Băng đeo ống đồng + tất
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Nước uống + khăn lạnh
                </li>
              </ul>
              <button class="btn-package primary">Chọn gói</button>
            </div>

            <div class="package-card">
              <div class="package-header">
                <h3>Gói Premium</h3>
                <div class="package-price">
                  <span class="price">400.000đ</span>
                  <span class="unit">/người</span>
                </div>
              </div>
              <ul class="package-features">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Tất cả trong gói Standard
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Giày cao cấp (Nike, Adidas)
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Bộ bảo hộ chuyên nghiệp
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Phòng thay đồ VIP
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Quay video trận đấu
                </li>
              </ul>
              <button class="btn-package">Chọn gói</button>
            </div>
          </div>
        </section>
      </div>
    </div>

    <app-user-footer />
  `,
  styles: [`
    .equipment-page {
      min-height: 100vh;
      background: #f9fafb;
    }

    .hero-section {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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

    .category-filter {
      display: flex;
      gap: 12px;
      margin-bottom: 40px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .category-filter button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border: 2px solid #e5e7eb;
      background: white;
      color: #6b7280;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .category-filter button:hover {
      border-color: #10b981;
      color: #10b981;
    }

    .category-filter button.active {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border-color: transparent;
    }

    .equipment-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 32px;
      margin-bottom: 64px;
    }

    .equipment-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
      transition: all 0.3s;
    }

    .equipment-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .equipment-image {
      position: relative;
      height: 240px;
      overflow: hidden;
    }

    .equipment-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .stock-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .stock-badge.available {
      background: #10b981;
      color: white;
    }

    .stock-badge.low {
      background: #f59e0b;
      color: white;
    }

    .equipment-content {
      padding: 20px;
    }

    .equipment-content h3 {
      font-size: 20px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .description {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 16px;
      min-height: 40px;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    }

    .stars {
      display: flex;
      gap: 2px;
      color: #fbbf24;
    }

    .reviews {
      font-size: 13px;
      color: #6b7280;
    }

    .equipment-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
    }

    .price-section {
      display: flex;
      flex-direction: column;
    }

    .price {
      font-size: 24px;
      font-weight: 800;
      color: #10b981;
    }

    .price-unit {
      font-size: 13px;
      color: #6b7280;
    }

    .btn-rent {
      padding: 10px 20px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-rent:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
    }

    .rental-info {
      margin: 80px 0;
      padding: 48px;
      background: white;
      border-radius: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    }

    .rental-info h2 {
      text-align: center;
      font-size: 32px;
      font-weight: 800;
      color: #1f2937;
      margin-bottom: 40px;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 32px;
    }

    .info-card {
      text-align: center;
    }

    .info-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }

    .info-icon svg {
      color: white;
    }

    .info-card h3 {
      font-size: 20px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 12px;
    }

    .info-card p {
      color: #6b7280;
      line-height: 1.6;
      font-size: 15px;
    }

    .packages-section {
      margin-top: 64px;
    }

    .packages-section h2 {
      text-align: center;
      font-size: 32px;
      font-weight: 800;
      color: #1f2937;
      margin-bottom: 40px;
    }

    .packages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
    }

    .package-card {
      background: white;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
      position: relative;
      transition: all 0.3s;
      border: 2px solid transparent;
    }

    .package-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .package-card.featured {
      border-color: #10b981;
      box-shadow: 0 8px 16px rgba(16, 185, 129, 0.2);
    }

    .popular-badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      padding: 6px 20px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .package-header {
      text-align: center;
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 2px solid #e5e7eb;
    }

    .package-header h3 {
      font-size: 24px;
      font-weight: 800;
      color: #1f2937;
      margin-bottom: 12px;
    }

    .package-price {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 4px;
    }

    .package-price .price {
      font-size: 36px;
      font-weight: 800;
      color: #10b981;
    }

    .package-price .unit {
      font-size: 16px;
      color: #6b7280;
    }

    .package-features {
      list-style: none;
      padding: 0;
      margin: 0 0 32px 0;
    }

    .package-features li {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
      color: #4b5563;
      font-size: 15px;
    }

    .package-features svg {
      color: #10b981;
      flex-shrink: 0;
    }

    .btn-package {
      width: 100%;
      padding: 14px;
      border: 2px solid #10b981;
      background: white;
      color: #10b981;
      border-radius: 12px;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-package:hover {
      background: #f0fdf4;
    }

    .btn-package.primary {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border-color: transparent;
    }

    .btn-package.primary:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 32px;
      }

      .hero-content p {
        font-size: 16px;
      }

      .equipment-grid {
        grid-template-columns: 1fr;
      }

      .packages-grid {
        grid-template-columns: 1fr;
      }

      .rental-info {
        padding: 32px 24px;
      }
    }
  `]
})
export class EquipmentComponent implements OnInit {
  equipment: Equipment[] = [];
  filteredEquipment: Equipment[] = [];
  activeCategory: string = 'all';

  ngOnInit() {
    this.loadEquipment();
    this.filteredEquipment = this.equipment;
  }

  loadEquipment() {
    this.equipment = [
      {
        id: 1,
        name: 'Bóng Đá Nike Premier League',
        description: 'Bóng đá chính hãng, size 5, chất liệu da PU cao cấp',
        image: 'https://images.unsplash.com/photo-1614632537197-38a17061c888?w=400&h=400&fit=crop',
        price: 50000,
        priceUnit: '/trận',
        category: 'ball',
        stock: 20,
        rating: 5,
        reviews: 156
      },
      {
        id: 2,
        name: 'Giày Nike Mercurial',
        description: 'Giày đá bóng chuyên nghiệp, đế AG, êm ái và bám sân tốt',
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
        price: 100000,
        priceUnit: '/ngày',
        category: 'shoes',
        stock: 15,
        rating: 5,
        reviews: 89
      },
      {
        id: 3,
        name: 'Áo Đấu Đội Tuyển',
        description: 'Áo thi đấu có số, chất liệu thấm hút mồ hôi tốt',
        image: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=400&h=400&fit=crop',
        price: 30000,
        priceUnit: '/bộ/trận',
        category: 'clothing',
        stock: 50,
        rating: 4,
        reviews: 234
      },
      {
        id: 4,
        name: 'Giày Adidas Predator',
        description: 'Giày cao cấp, kiểm soát bóng tuyệt vời, phù hợp sân cỏ nhân tạo',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        price: 120000,
        priceUnit: '/ngày',
        category: 'shoes',
        stock: 10,
        rating: 5,
        reviews: 67
      },
      {
        id: 5,
        name: 'Bộ Bảo Hộ Chân',
        description: 'Bảo vệ ống đồng, chống chấn thương hiệu quả',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop',
        price: 20000,
        priceUnit: '/cặp/trận',
        category: 'protection',
        stock: 30,
        rating: 4,
        reviews: 145
      },
      {
        id: 6,
        name: 'Găng Tay Thủ Môn Pro',
        description: 'Găng tay chuyên nghiệp, bám bóng tốt, bảo vệ tối đa',
        image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=400&fit=crop',
        price: 80000,
        priceUnit: '/đôi/ngày',
        category: 'protection',
        stock: 8,
        rating: 5,
        reviews: 43
      },
      {
        id: 7,
        name: 'Tất Thể Thao Cao Cổ',
        description: 'Tất dày, êm ái, chống trượt và thấm mồ hôi',
        image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
        price: 15000,
        priceUnit: '/đôi/trận',
        category: 'clothing',
        stock: 60,
        rating: 4,
        reviews: 312
      },
      {
        id: 8,
        name: 'Băng Đội Trưởng',
        description: 'Băng đeo tay đội trưởng, nhiều màu sắc',
        image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=400&fit=crop',
        price: 10000,
        priceUnit: '/cái/trận',
        category: 'accessories',
        stock: 25,
        rating: 4,
        reviews: 78
      },
      {
        id: 9,
        name: 'Bóng Đá Molten Training',
        description: 'Bóng tập luyện chất lượng, độ bền cao',
        image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
        price: 40000,
        priceUnit: '/trận',
        category: 'ball',
        stock: 25,
        rating: 4,
        reviews: 198
      },
      {
        id: 10,
        name: 'Túi Đựng Giày Thể Thao',
        description: 'Túi chống nước, nhiều ngăn tiện lợi',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        price: 25000,
        priceUnit: '/cái/ngày',
        category: 'accessories',
        stock: 12,
        rating: 4,
        reviews: 56
      },
      {
        id: 11,
        name: 'Quần Đùi Thể Thao',
        description: 'Quần thi đấu nhẹ nhàng, thoáng mát',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop',
        price: 25000,
        priceUnit: '/cái/trận',
        category: 'clothing',
        stock: 40,
        rating: 4,
        reviews: 167
      },
      {
        id: 12,
        name: 'Băng Cổ Tay Thấm Mồ Hôi',
        description: 'Băng thấm mồ hôi hiệu quả, co giãn tốt',
        image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=400&fit=crop',
        price: 10000,
        priceUnit: '/đôi/trận',
        category: 'accessories',
        stock: 35,
        rating: 4,
        reviews: 201
      }
    ];
  }

  filterByCategory(category: string) {
    this.activeCategory = category;
    if (category === 'all') {
      this.filteredEquipment = this.equipment;
    } else {
      this.filteredEquipment = this.equipment.filter(item => item.category === category);
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  }
}
