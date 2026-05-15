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
  padding: 60px 20px;
  background-color: #f1f5fa;
}

.section-title {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  left: auto;
  transform: none;
}
</style>