<template>
  <div class="rules">
    <h2>Правила участия</h2>
    <div class="rules__main">
      <p>В данном разделе заранее будут определены правила марафона.</p>
      <p>Основное:</p>
      <ul>
        <li>Для использования бота Телеграм необходимо указать userName (@example)</li>
        <li>Ссылка на телеграм бот будет доступна в правилах</li>
        <li><b>Команду можно создать или выбрать из списка. (это будет доступно на вкладке командные результаты)</b></li>
        <li>Перед выбором команды можно будет вывести список участников команды</li>
      </ul>
    </div>
    <h2>Достижения</h2>
    <p>Ниже будет список всех доступных достижений</p>
    <div v-for="item in per['achievements']" :key="item['id']" class="achievements">
      <Achievement :achieve="item"></Achievement>
      <Achievement :achieve="item"></Achievement>
    </div>
    <h2>Благодарность</h2>
    <p>Список сотрудников принявших активное участие в подготовке проекта.</p>
  </div>
</template>

<script>

import { personal } from '@/test-data/testData';
import Achievement from '@/components/profile/Achievement.vue';

export default {
  name: 'RulesOfParticipationVue',
  components: {
    Achievement,
  },
  data() {
    const per = personal;
    console.log(personal['achievements']);
    return {per}
  }
}
</script>

<style scoped>

.rules__main {
  text-align: left;
  margin: auto;
  width: calc(100% - 50px);
}

.achievements {
  width: calc(100% - 50px);
  margin: auto;
}
</style>