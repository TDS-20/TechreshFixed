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
        <i class="fab fa-telegram-plane"></i>
        <span>Telegram</span>
      </a>
      <a href="https://max.ru" target="_blank" rel="noopener noreferrer" class="social-btn max-btn">
        <i class="fas fa-envelope"></i>
        <span>Max</span>
      </a>
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="social-btn whatsapp-btn">
        <i class="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
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
  margin-top: 2rem;
  flex-wrap: wrap;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.social-btn i {
  font-size: 1.2rem;
}

.telegram-btn {
  background-color: #0088cc;
  color: white;
}

.telegram-btn:hover {
  background-color: #0077b5;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 136, 204, 0.4);
  border-color: rgba(255, 255, 255, 0.5);
}

body.dark-theme .telegram-btn {
  background-color: #0088cc;
}

body.dark-theme .telegram-btn:hover {
  background-color: #0077b5;
}

.max-btn {
  background-color: #6c5ce7;
  color: white;
}

.max-btn:hover {
  background-color: #5b4cdb;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(108, 92, 237, 0.4);
  border-color: rgba(255, 255, 255, 0.5);
}

body.dark-theme .max-btn {
  background-color: #6c5ce7;
}

body.dark-theme .max-btn:hover {
  background-color: #5b4cdb;
}

.whatsapp-btn {
  background-color: #25d366;
  color: white;
}

.whatsapp-btn:hover {
  background-color: #1ebd58;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
  border-color: rgba(255, 255, 255, 0.5);
}

body.dark-theme .whatsapp-btn {
  background-color: #25d366;
}

body.dark-theme .whatsapp-btn:hover {
  background-color: #1ebd58;
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