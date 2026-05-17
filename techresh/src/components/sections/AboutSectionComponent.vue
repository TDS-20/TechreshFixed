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
  padding: 80px 20px;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
}

body.dark-theme .about {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
}

.section-title {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  left: auto;
  transform: none;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto 0;
}

.about-text p {
  color: #555;
  line-height: 1.8;
  font-size: 1.1rem;
}

body.dark-theme .about-text p {
  color: #b0b0b0;
}

.about-image img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
  flex-wrap: wrap;
}

.stat-item {
  background: white;
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
}

body.dark-theme .stat-item {
  background: #16213e;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-item strong {
  display: block;
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 5px;
}

body.dark-theme .stat-item strong {
  color: #4dabf7;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .stats {
    flex-direction: column;
    align-items: center;
  }
}
</style>