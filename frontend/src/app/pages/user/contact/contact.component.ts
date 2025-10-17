import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserHeaderComponent } from '../../../components/user/user-header.component';
import { UserFooterComponent } from '../../../components/user/user-footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, UserHeaderComponent, UserFooterComponent],
  template: `
    <app-user-header />

    <div class="contact-page">
      <!-- Hero Section -->
      <section class="contact-hero">
        <div class="container">
          <h1>Liên Hệ Với Chúng Tôi</h1>
          <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="contact-content">
        <div class="container">
          <div class="content-grid">
            <!-- Contact Info -->
            <div class="contact-info">
              <h2>Thông tin liên hệ</h2>
              <p class="intro">Hãy liên hệ với chúng tôi qua các kênh sau hoặc để lại lời nhắn, chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
              
              <div class="info-items">
                <div class="info-item">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div class="info-text">
                    <h3>Địa chỉ</h3>
                    <p>123 Đường Lê Lợi, Quận 1, TP.HCM</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div class="info-text">
                    <h3>Điện thoại</h3>
                    <p>Hotline: 0987.654.321</p>
                    <p>Hỗ trợ: 0912.345.678</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div class="info-text">
                    <h3>Email</h3>
                    <p>info@minifootball.vn</p>
                    <p>support@minifootball.vn</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div class="info-text">
                    <h3>Giờ làm việc</h3>
                    <p>Thứ 2 - Chủ nhật: 06:00 - 23:00</p>
                    <p>Đặt sân online: 24/7</p>
                  </div>
                </div>
              </div>

              <div class="social-links">
                <h3>Kết nối với chúng tôi</h3>
                <div class="social-icons">
                  <a href="#" class="social-icon facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" class="social-icon instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a href="#" class="social-icon youtube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="#" class="social-icon zalo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.486c-.346.414-.92.644-1.563.644-.518 0-1.012-.148-1.455-.44l-3.876-2.579-3.876 2.579c-.443.292-.937.44-1.455.44-.643 0-1.217-.23-1.563-.644-.494-.59-.584-1.424-.241-2.106l2.877-5.753c.346-.692 1.036-1.127 1.798-1.127h5.68c.762 0 1.452.435 1.798 1.127l2.877 5.753c.343.682.253 1.516-.241 2.106z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form">
              <h2>Gửi tin nhắn cho chúng tôi</h2>
              <form (ngSubmit)="submitForm()">
                <div class="form-group">
                  <label>Họ và tên *</label>
                  <input 
                    type="text" 
                    [(ngModel)]="formData.name" 
                    name="name"
                    placeholder="Nguyễn Văn A"
                    class="form-control"
                    required
                  />
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      [(ngModel)]="formData.email" 
                      name="email"
                      placeholder="example@email.com"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label>Số điện thoại *</label>
                    <input 
                      type="tel" 
                      [(ngModel)]="formData.phone" 
                      name="phone"
                      placeholder="0987654321"
                      class="form-control"
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label>Chủ đề</label>
                  <select [(ngModel)]="formData.subject" name="subject" class="form-control">
                    <option value="">Chọn chủ đề</option>
                    <option value="booking">Đặt sân</option>
                    <option value="support">Hỗ trợ kỹ thuật</option>
                    <option value="feedback">Góp ý</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Nội dung *</label>
                  <textarea 
                    [(ngModel)]="formData.message" 
                    name="message"
                    placeholder="Nhập nội dung tin nhắn..."
                    class="form-control"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" class="btn-submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="map-section">
        <div class="container">
          <h2>Vị trí của chúng tôi</h2>
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3249948736827!2d106.69531431471941!3d10.786834192313928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zMTIzIMSQLiBMw6ogTOG7o2ksIELhur9uIFRoxOBuaCwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s" 
              width="100%" 
              height="450" 
              style="border:0; border-radius: 16px;" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
    </div>

    <app-user-footer />
  `,
  styles: [`
    .contact-page {
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .contact-hero {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      padding: 80px 0 60px;
      text-align: center;
    }

    .contact-hero h1 {
      font-size: 42px;
      font-weight: 800;
      margin-bottom: 12px;
    }

    .contact-hero p {
      font-size: 18px;
      opacity: 0.95;
    }

    .contact-content {
      padding: 80px 0;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 60px;
    }

    .contact-info h2,
    .contact-form h2 {
      font-size: 28px;
      font-weight: 800;
      color: #1f2937;
      margin-bottom: 16px;
    }

    .intro {
      color: #6b7280;
      line-height: 1.7;
      margin-bottom: 32px;
    }

    .info-items {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 40px;
    }

    .info-item {
      display: flex;
      gap: 20px;
      padding: 20px;
      background: #f9fafb;
      border-radius: 12px;
      transition: all 0.3s;
    }

    .info-item:hover {
      background: #f0fdf4;
      transform: translateX(8px);
    }

    .info-item .icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }

    .info-text h3 {
      font-size: 16px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 6px;
    }

    .info-text p {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.6;
    }

    .social-links {
      padding: 24px;
      background: #f9fafb;
      border-radius: 16px;
    }

    .social-links h3 {
      font-size: 16px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 16px;
    }

    .social-icons {
      display: flex;
      gap: 12px;
    }

    .social-icon {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.3s;
    }

    .social-icon:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }

    .social-icon.facebook {
      background: #1877F2;
    }

    .social-icon.instagram {
      background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    }

    .social-icon.youtube {
      background: #FF0000;
    }

    .social-icon.zalo {
      background: #0068FF;
    }

    .contact-form {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }

    .form-group {
      margin-bottom: 24px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .form-control {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 10px;
      font-size: 15px;
      transition: all 0.3s;
    }

    .form-control:focus {
      outline: none;
      border-color: #10b981;
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }

    textarea.form-control {
      resize: vertical;
      min-height: 120px;
    }

    .btn-submit {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition: all 0.3s;
    }

    .btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
    }

    .map-section {
      padding: 80px 0;
      background: #f9fafb;
    }

    .map-section h2 {
      font-size: 32px;
      font-weight: 800;
      color: #1f2937;
      text-align: center;
      margin-bottom: 40px;
    }

    .map-container {
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      border-radius: 16px;
      overflow: hidden;
    }

    @media (max-width: 1024px) {
      .content-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .form-row {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .contact-hero h1 {
        font-size: 32px;
      }

      .contact-form {
        padding: 24px;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitForm() {
    console.log('Form data:', this.formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    // Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
