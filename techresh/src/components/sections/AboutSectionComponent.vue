<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.refresh();
});
</script>

<template>
  <section id="about" class="about">
    <h2 class="section-title" data-aos="fade-up">О нас</h2>
    <div class="about-content">
      <div class="about-text" data-aos="fade-right">
        <p>С 2003 года в индустрии информационных технологий. В штате специалисты по обслуживанию, ремонту, подбору и закупке оборудования, а также разработке ПО и монтажу слаботочных систем. У нас вы получите комплексное решение под ваши задачи.</p>
      </div>
      <div class="about-image" data-aos="fade-left">
        <img 
          src="https://avatars.mds.yandex.net/get-ydo/4394505/2a0000017b16a0f8b5527892df6f89fcf00f/diploma"
          alt="Инженер настраивает серверное оборудование"
        />
      </div>
    </div>
    <div class="stats">
      <div class="stat-item" data-aos="zoom-in" data-aos-delay="100"><strong>700+</strong> Реализованных проектов</div>
      <div class="stat-item" data-aos="zoom-in" data-aos-delay="200"><strong>500+</strong> Довольных партнеров</div>
      <div class="stat-item" data-aos="zoom-in" data-aos-delay="300"><strong>20+</strong> Лет на рынке</div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 60px 20px;
  background-color: #fff;
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