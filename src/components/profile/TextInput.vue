<template>
  <div class="block">
    <p class="block__text-title">{{ textTitle }}: </p>
    <div v-if="change" class="block__content">
      <p class="block__text">{{ text }}</p>
      <button @click="changeBlok" class="block__button">Изменить</button>
    </div>
    <div v-else  class="block__content">
      <input :value="text" class="block__input"/>
      <button @click="changeBlok" class="block__button">Сохранить</button>
    </div>

  </div>
</template>
  
  <script>

  export default {
    name: 'TextInputVue',
    props: {
      text: String,
      textTitle: String
    },
    data() {
      let change = true;
      return {
        change
      }
    },
    methods: {
      changeBlok() {
        this.change = !this.change;
      }
    },
  }
  </script>
  
  <style scoped>
  .block {
    display: flex;
    font-size: 15px;
    line-height: 18px;
    height: 35px;
  }

  .block__content {
    display: flex;
    align-items: center;
    height: 35px;
  }

  .block__text-title {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    width: 90px;
    padding: 10px;
    height: 20px;
    font-size: 15px;
    line-height: 18px;
  }

  .block__text {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 400px;
    background-color: white;
    outline: 1px solid white;
    border-radius: 30px;
    padding: 10px;
    height: 20px;
    text-align: left;
    font-size: 15px;
    line-height: 18px;
  }

  .block__input {
    width: 400px;
    background-color: white;
    border: 0;
    outline: 1px solid black;
    border-radius: 30px;
    padding: 10px;
    height: 20px;
    font-size: 15px;
    line-height: 18px;
    text-decoration: none;
  }

  .block__input:focus {
    border: 0;
  }

  .block__button {
    margin: 0;
    margin-left: 10px;
    padding: 10px;
    border: 0;
    border-radius: 30px;
    background-color: rgb(26, 89, 159);
    color: white;
    height: 100%;
    width: 100px;
    cursor: pointer;
  }
  </style>
  