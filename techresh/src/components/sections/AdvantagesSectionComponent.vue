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
</style>