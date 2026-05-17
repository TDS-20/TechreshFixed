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
    <div class="contact-link" data-aos="zoom-in" data-aos-delay="200">
      <i class="fab fa-vk"></i>
      <a href="https://vk.com/techreshufa?from=groups " target="_blank" rel="noopener noreferrer">
        Перейти в нашу группу ВКонтакте
      </a>
    </div>
    <div class="social-buttons" data-aos="fade-up" data-aos-delay="300">
      <a href="#" target="_blank" rel="noopener noreferrer" class="social-btn telegram-btn">
        <i class="fab fa-telegram"></i>
        <span>Telegram</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" class="social-btn whatsapp-btn">
        <i class="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" class="social-btn max-btn">
        <i class="fas fa-star"></i>
        <span>Max</span>
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
  gap: 15px;
  justify-content: center;
  margin-top: 25px;
  flex-wrap: wrap;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  color: white;
}

.social-btn i {
  font-size: 20px;
}

.telegram-btn {
  background-color: #0088cc;
}

.telegram-btn:hover {
  background-color: #0077b5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 136, 204, 0.4);
}

.whatsapp-btn {
  background-color: #25D366;
}

.whatsapp-btn:hover {
  background-color: #20bd5a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
}

.max-btn {
  background-color: #6c5ce7;
}

.max-btn:hover {
  background-color: #5b4cdb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.4);
}

body.dark-theme .social-btn {
  color: white;
}
</style>