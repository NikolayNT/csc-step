<template>
  <header class="title">
    <img src="./img/logo.png" class="title__img">
    <div class="menu" style="margin-left: auto;">
      <p>Общая статистика марафона</p>
    </div>
    <div class="menu"  style="background-color: rgb(36,149,214);">
      <p>Командные результаты</p>
    </div>
    <div class="menu" >
      <p>Личные результаты</p>
    </div>
    <div class="menu" >
      <img src="../src/img/blue-arrow-23.png" style="height: 75px; width: 100px; border-radius: 50%; background-color: blue;display: flex;align-items: center;
    justify-content: center; margin: 20px;">
    </div>
  </header>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Verdana, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.title {
  position: relative;
  display: flex;
  justify-content: start;
  height: 140px;
  padding-left: 50px;
  background-color: rgb(103,173,227);
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  width: 120px;
  height: 100%;
}

.title__img {
  margin-top: 20px;
  height: 100px;
}
</style>
