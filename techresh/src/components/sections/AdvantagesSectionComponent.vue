<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.refresh();
});
</script>

<template>
  <section id="advantages" class="advantages">
    <h2 class="section-title centered-title" data-aos="fade-up">Почему мы?</h2>
    <div class="advantages-list">
      <div class="advantage-card" data-aos="flip-left" data-aos-delay="100">
        <h3>Дистанционное решение</h3>
        <p>В 87% случаев помогаем удаленно, без выезда.</p>
      </div>
      <div class="advantage-card" data-aos="flip-left" data-aos-delay="200">
        <h3>Выездные работы</h3>
        <p>Если задача не поддаётся удалённому решению, наши технические специалисты готовы выехать на вашу территорию для полного устранения неполадки на месте.</p>
      </div>
      <div class="advantage-card" data-aos="flip-left" data-aos-delay="300">
        <h3>Индивидуальный подход</h3>
        <p>Решение под ваш бизнес, а не типовое предложение.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.centered-title {
  display: block;
  text-align: center;
  left: auto;
  transform: none;
}

.advantages {
  padding: 80px 20px;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
}

body.dark-theme .advantages {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
}

.advantages-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto 0;
}

.advantage-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

body.dark-theme .advantage-card {
  background: #16213e;
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 123, 255, 0.15);
}

.advantage-card h3 {
  color: #007bff;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

body.dark-theme .advantage-card h3 {
  color: #4dabf7;
}

.advantage-card p {
  color: #555;
  line-height: 1.6;
}

body.dark-theme .advantage-card p {
  color: #b0b0b0;
}

@media (max-width: 768px) {
  .advantages-list {
    grid-template-columns: 1fr;
  }
}
</style>