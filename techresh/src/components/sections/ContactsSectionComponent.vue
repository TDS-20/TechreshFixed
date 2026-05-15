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
</style>