<script setup lang="ts">

</script>

<template>
  <div class="button-write-us">
    <a href="#contacts" class="write-us-btn">
      <i class="fas fa-comments"></i>
      <span>Написать нам</span>
    </a>
  </div>
</template>

<style scoped>
.button-write-us {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
}

.write-us-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #007bff, #00c6ff);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4);
  transition: all 0.3s ease;
}

.write-us-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.6);
  background: linear-gradient(135deg, #0066d6, #00b3e6);
}

.write-us-btn i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .write-us-btn {
    padding: 12px 24px;
    font-size: 0.9rem;
  }
}
</style>