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
  padding-top: 80px;
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
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.6;
}

.centered-btn {
  display: inline-block;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: white;
  padding: 15px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
}

.centered-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
  background: linear-gradient(135deg, #20bd5a, #0f7a6e);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .centered-btn {
    padding: 12px 30px;
    font-size: 1rem;
  }
}
</style>