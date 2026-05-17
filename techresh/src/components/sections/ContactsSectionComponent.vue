<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.refresh();
});
</script>

<template>
  <section id="contacts" class="contacts">
    <h2 class="section-title centered-contacts-title" data-aos="fade-up">Контакты</h2>
    <p data-aos="fade-up" data-aos-delay="100"><strong>support@techresh-ufa.ru</strong><br/>
      Республика Башкортостан, г. Уфа, ул. Сочинская, д. 12</p>
    
    <div class="social-buttons" data-aos="zoom-in" data-aos-delay="200">
      <a href="https://t.me/squps" target="_blank" rel="noopener noreferrer" class="social-btn telegram-btn">
        <i class="fab fa-telegram"></i>
        <span>Наш Telegram</span>
      </a>
      
      <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" class="social-btn whatsapp-btn">
        <i class="fab fa-whatsapp"></i>
        <span>Наш WhatsApp</span>
      </a>
      
      <a href="https://max.ru/account/techresh" target="_blank" rel="noopener noreferrer" class="social-btn max-btn">
        <i class="fas fa-star"></i>
        <span>Наш Max</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.centered-contacts-title {
  display: block;
  text-align: center;
  left: auto;
  transform: none;
  color: #1a1a1a !important;
}

body.dark-theme .centered-contacts-title {
  color: #e0e0e0 !important;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.social-btn i {
  font-size: 1.3rem;
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.telegram-btn {
  background: linear-gradient(135deg, #0088cc, #00afff);
  color: white;
}

.telegram-btn:hover {
  background: linear-gradient(135deg, #0077b5, #0099e0);
}

.whatsapp-btn {
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: white;
}

.whatsapp-btn:hover {
  background: linear-gradient(135deg, #20bd5a, #0f7a6e);
}

.max-btn {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: white;
}

.max-btn:hover {
  background: linear-gradient(135deg, #5b4cdb, #8b85e8);
}

@media (max-width: 768px) {
  .social-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .social-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>