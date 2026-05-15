<script setup>

</script>

<template>
  <div class="contact-form-container">
    <h2>Оставьте заявку</h2>
    <form method="POST" action="/contact">
      <div class="form-group">
        <label for="name">Ваше имя</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="phone">Телефон</label>
        <input type="tel" id="phone" name="phone" required>
      </div>
      <div class="form-group">
        <label for="message">Сообщение</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<style scoped>

</style>