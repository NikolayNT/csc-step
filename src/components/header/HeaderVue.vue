<template>
  <div class="header">
    <img class="header__logo" src="../../img/logo.png">
    <div class="header__menu">
      <ButtonMenu path="/newsfeed" name="Лента" />
      <ButtonMenu path="/overall" name="Общие результаты" />
      <ButtonMenu path="/team" name="Командные результаты" />
      <ButtonMenu path="/" name="Личные результаты" />
      <ButtonMenu path="/rules" name="Правила участия" />
      <ButtonMenu path="/profile" name="Профиль" :img="personal.img"/>
    </div>
  </div>
</template>

<script>

import { personal } from '@/test-data/testData';

import ButtonMenu from './ButtonMenu.vue';

export default {
  name: 'HeaderVue',
  data() {
    return {
      personal
    }
  },
  components: { ButtonMenu },
}
</script>

<style scoped>

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100px;
  background-color: white;
}

.header__logo {
  height: 80%;
   margin: 0 auto 0 20px;
}

.header__menu {
  display: flex;
  height: 100%;
}
</style>