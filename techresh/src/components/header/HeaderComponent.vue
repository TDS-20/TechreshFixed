<script setup>

import logoDarkUrl from '../../assets/logo.svg'
import logoWhiteUrl from '../../assets/logo_white.svg'
import { onMounted, ref } from "vue";

const isDark = ref(false);
const isOpen = ref(false);
const isMobile = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark-theme', isDark.value);
};

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
})

</script>

<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img v-if="!isDark" :src="logoWhiteUrl" alt="Логотип компании" class="logo-image">
        <img v-if="isDark" :src="logoDarkUrl" alt="Логотип компании" class="logo-image">
      </router-link>
    </div>
    <nav>
      <a href="#about">О нас</a>
      <a href="#services">Услуги</a>
      <a href="#advantages">Преимущества</a>
      <a href="#contacts">Контакты</a>
    </nav>
    <ul v-if="isMobile" class="nav-links" :class="{ 'nav-open': isOpen }" :style="isDark ? 'background: #333;' : 'background-color: rgb(220, 220, 220);'">
      <li><a href="#about" @click="isOpen = false" :style="isDark ? 'color: white;' : 'color: black;'">О нас</a></li>
      <li><a href="#services" @click="isOpen = false" :style="isDark ? 'color: white;' : 'color: black;'">Услуги</a></li>
      <li><a href="#advantages" @click="isOpen = false" :style="isDark ? 'color: white;' : 'color: black;'">Преимущества</a></li>
      <li><a href="#contacts" @click="isOpen = false" :style="isDark ? 'color: white;' : 'color: black;'">Контакты</a></li>
    </ul>
    <button @click="toggleTheme" class="theme-toggle-btn">{{ isDark ? '🌕' : '🌙' }}</button>
    <button class="burger" @click="isOpen = !isOpen" :class="{ 'active': isOpen }">
      <span :style="!isDark ? 'background: black;' : 'background: white;'"></span>
      <span :style="!isDark ? 'background: black;' : 'background: white;'"></span>
      <span :style="!isDark ? 'background: black;' : 'background: white;'"></span>
    </button>
    <div v-if="isOpen" class="overlay" @click="isOpen = false"></div>
  </header>
</template>

<style scoped>

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101;
}

.burger span {
  width: 100%;
  height: 2px;
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  nav {
    display: none;
  }
  .burger {
    display: flex;
  }
  .burger.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .burger.active span:nth-child(2) { opacity: 0; }
  .burger.active span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    flex-direction: column;
    padding: 80px 40px;
    transition: right 0.4s ease-in-out;
    box-shadow: -5px 0 15px rgba(0,0,0,0.3);
    z-index: 100;
  }

  .nav-links.nav-open {
    right: 0;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 99;
}
</style>