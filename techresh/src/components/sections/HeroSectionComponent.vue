<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
});
</script>

<template>
  <section class="hero">
    <div class="hero-background"></div>
    <div class="hero-content">
      <h1 data-aos="fade-down">IT поддержка для бизнеса</h1>
      <p data-aos="fade-up" data-aos-delay="200">Обеспечим бесперебойную работу вашего бизнеса. Оперативная поддержка сотрудников. Освободим вас от технических проблем для развития бизнеса.</p>
      <a href="https://t.me/squps" target="_blank" class="btn-whatsapp centered-btn" data-aos="fade-up" data-aos-delay="600">Написать нам</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=800&fit=crop');
  background-size: cover;
  background-position: center;
  filter: blur(5.6px) brightness(0.7);
  transform: scale(1.1);
  z-index: 0;
  animation: slowZoom 20s ease-in-out infinite alternate;
}

@keyframes slowZoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.2);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.centered-btn {
  display: block;
  margin: 0 auto;
  text-align: center;
}
</style>