<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.refresh();
});
</script>

<template>
  <section id="services" class="services">
    <h2 class="section-title" data-aos="fade-up">Наши услуги</h2>
    <div class="services-list">
      <div class="service-card" data-aos="fade-up" data-aos-delay="100">
        <h3>Администрирование</h3>
        <ul>
          <li>Сопровождение серверов</li>
          <li>Обслуживание компьютеров</li>
          <li>Создание виртуальных сетей</li>
          <li>Подбор и закупка IT-комплектующих</li>
          <li>Настройка организационной техники </li>
        </ul>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="200">
        <h3>Разработка сайтов</h3>
        <ul>
          <li>Проектирование и верстка</li>
          <li>Сопровождение сайтов</li>
          <li>Добавление контента</li>
        </ul>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="300">
        <h3>Монтаж и обслуживание</h3>
        <ul>
          <li>Видеонаблюдение</li>
          <li>Локальные сети</li>
          <li>Бесшовные WiFi-сети</li>
          <li>Системы контроля доступа</li>
          <li>Телефония</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 80px 20px;
  background-color: #f1f5fa;
}

body.dark-theme .services {
  background: #0f0f1a;
}

.section-title {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  left: auto;
  transform: none;
}

.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto 0;
}

.service-card {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

body.dark-theme .service-card {
  background: linear-gradient(145deg, #16213e, #1a1a2e);
  border-color: #2d2d44;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15);
  border-color: #eaf3ff;
}

body.dark-theme .service-card:hover {
  box-shadow: 0 20px 40px rgba(0, 123, 255, 0.3);
  border-color: #3d3d5c;
}

.service-card h3 {
  color: #007bff;
  font-size: 1.4rem;
  margin-bottom: 15px;
}

body.dark-theme .service-card h3 {
  color: #4dabf7;
}

.service-card ul {
  list-style: none;
  padding: 0;
}

.service-card li {
  color: #555;
  padding: 8px 0 8px 25px;
  position: relative;
  line-height: 1.6;
}

body.dark-theme .service-card li {
  color: #b0b0b0;
}

.service-card li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #007bff;
  font-weight: bold;
}

body.dark-theme .service-card li::before {
  color: #4dabf7;
}

.service-card li:hover {
  transform: translateX(5px);
  color: #007bff;
}

body.dark-theme .service-card li:hover {
  color: #4dabf7;
}

@media (max-width: 768px) {
  .services-list {
    grid-template-columns: 1fr;
  }
}
</style>