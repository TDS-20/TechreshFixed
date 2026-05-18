<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.refresh();
});

const cases = ref([
  {
    id: 1,
    title: 'IT-аутсорсинг',
    description: 'В организации с 15 компьютерами и 1 сервером требовалось обслуживание IT инфроструктуры, содержание штатного системного администратора финансова не целесообразн.',
    tasks: [
      'Установка ПО',
      'Настройка компьютеров',
      'Разграничение прав доступа',
      'Информационная безопасность'
    ],
    result: 'Стабильная работа организации, без найма IT-специалиста на полную ставку',
    date: '2020'
  },
  {
    id: 2,
    title: 'Монтаж локальной сети',
    description: 'Федеральной организации необходим монтаж локальной сети при открытие новых офисов по Республике Башкортостан.',
    tasks: [
      'Подбор и закупка материалов',
      'Настройка активного оборудования',
      'Установка и коммуникация сетевого шкафа',
      'Монтаж локальной сети с резервированием'
    ],
    result: 'Все объекты сданы с соблюдением нормативов заказчика и в заданый срок.',
    date: '2019+'
  },
  {
    id: 3,
    title: 'Внедрение системы видеонаблюдения',
    description: 'Разработка и монтаж комплексной системы видеонаблюдения для производственной площадки площадью 5000 м².',
    tasks: [
      'Проектирование системы',
      'Монтаж 68 камер наблюдения',
      'Настройка удаленного доступа',
      'Интеграция с системой безопасности'
    ],
    result: 'Полный контроль периметра и внутренних помещений, снижение потерь на 85%',
    date: '2022'
  },
  {
    id: 4,
    title: 'Настройка серверной инфраструктуры',
    description: 'Полная модернизация серверной инфраструктуры с миграцией данных и настройкой резервного копирования.',
    tasks: [
      'Подбор и закупка оборудования',
      'Настройка автоматического бэкапа',
      'Миграция данных без остановки бизнеса',
      'Аудит существующей инфраструктуры'
    ],
    result: 'Увеличение производительности на 40%, снижение времени простоя до минимума',
    date: '2024'
  },
  {
    id: 5,
    title: 'Организация бесшовной WiFi сети',
    description: 'Развертывание WiFi сети для покрытия всех этажей склада без мертвых зон.',
    tasks: [
      'Радиопланирование',
      'Настройка роуминга',
      'Установка 24 точек доступа',
      'Организация гостевого доступа'
    ],
    result: 'Стабильное покрытие на всех 3 этажах, более 50 одновременных подключений.',
    date: '2023'
  },
  {
    id: 6,
    title: 'Настройка IP-телефонии',
    description: 'Перевод организации с аналоговой на IP телефони.',
    tasks: [
        'Закупка сервера телефонии и IP телефонов',
        'Согласование переноса номеров с провайдером',
        'Модернизация существующей локальной сети под IP телефонию',
        'Настройка виртуальной АТС и голосового меню'
    ],
    result: 'Удобное распределение внутрених и внешних звонков и экономия на телефонии',
    date: '2018'
  }
]);
</script>

<template>
  <section id="cases" class="cases">
    <h2 class="section-title" data-aos="fade-up">Наши кейсы</h2>
    <p class="cases-intro" data-aos="fade-up" data-aos-delay="100">
      Примеры реализованных проектов для наших клиентов
    </p>
    <div class="cases-list">
      <div 
        v-for="caseItem in cases" 
        :key="caseItem.id" 
        class="case-card"
        data-aos="fade-up"
        :data-aos-delay="caseItem.id * 100"
      >
        <div class="case-header">
          <h3>{{ caseItem.title }}</h3>
          <span class="case-date">{{ caseItem.date }}</span>
        </div>
        <p class="case-description">{{ caseItem.description }}</p>
        <div class="case-tasks">
          <h4>Задачи:</h4>
          <ul>
            <li v-for="(task, index) in caseItem.tasks" :key="index">
              {{ task }}
            </li>
          </ul>
        </div>
        <div class="case-result">
          <h4>Результат:</h4>
          <p>{{ caseItem.result }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases {
  padding: 60px 20px;
  background-color: #fff;
}

body.dark-theme .cases {
  background-color: #1e1e1e;
}

.section-title {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  left: auto;
  transform: none;
}

.cases-intro {
  text-align: center;
  color: #555;
  max-width: 700px;
  margin: -1rem auto 3rem;
  font-size: 1.1rem;
}

body.dark-theme .cases-intro {
  color: #e0e0e0;
}

.cases-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.case-card {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

body.dark-theme .case-card {
  background: linear-gradient(145deg, #2a2a2a, #252525);
  border-color: #3a3a3a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.case-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background: linear-gradient(to bottom, #007bff, #00c6ff);
  transition: height 0.3s ease;
}

.case-card:hover::before {
  height: 100%;
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15);
  border-color: #eaf3ff;
}

body.dark-theme .case-card:hover {
  box-shadow: 0 20px 40px rgba(0, 123, 255, 0.25);
  border-color: #3a3a3a;
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 15px;
}

.case-header h3 {
  color: #007bff;
  font-size: 1.3rem;
  flex: 1;
}

body.dark-theme .case-header h3 {
  color: #64b5f6;
}

.case-date {
  background: linear-gradient(135deg, #007bff, #00c6ff);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.case-client strong {
  color: #007bff;
}

body.dark-theme .case-client strong {
  color: #64b5f6;
}

.case-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

body.dark-theme .case-description {
  color: #e0e0e0;
}

.case-tasks,
.case-result {
  margin-top: 20px;
}

.case-tasks h4,
.case-result h4 {
  color: #007bff;
  font-size: 1rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

body.dark-theme .case-tasks h4,
body.dark-theme .case-result h4 {
  color: #64b5f6;
}

.case-tasks h4::before,
.case-result h4::before {
  content: '📋';
  font-size: 1.2rem;
}

.case-result h4::before {
  content: '✅';
}

.case-tasks ul {
  list-style: none;
  padding-left: 0;
}

.case-tasks li {
  color: #555;
  padding: 5px 0 5px 25px;
  position: relative;
  transition: transform 0.3s ease;
}

body.dark-theme .case-tasks li {
  color: #e0e0e0;
}

.case-tasks li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #007bff;
  font-weight: bold;
}

body.dark-theme .case-tasks li::before {
  color: #64b5f6;
}

.case-tasks li:hover {
  transform: translateX(5px);
  color: #007bff;
}

body.dark-theme .case-tasks li:hover {
  color: #64b5f6;
}

.case-result p {
  background: linear-gradient(135deg, #eaf3ff, #f0f8ff);
  padding: 15px;
  border-radius: 10px;
  color: #333;
  font-weight: 500;
  border-left: 3px solid #007bff;
}

body.dark-theme .case-result p {
  background: linear-gradient(135deg, #2d3a4a, #253040);
  color: #e0e0e0;
  border-left-color: #64b5f6;
}

@media (max-width: 768px) {
  .cases-list {
    grid-template-columns: 1fr;
  }
  
  .case-header {
    flex-direction: column;
  }
  
  .case-date {
    align-self: flex-start;
  }
}
</style>
