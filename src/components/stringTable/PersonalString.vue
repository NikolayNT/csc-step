<template>
  <div class="string">
    <p class="string__simple-cell">{{ ordinal }}</p>
    <p :class="['string__simple-cell date']">{{ date }}</p>
    <p @click="activePopup" :class="['string__simple-cell step', text < purpose && 'red']">{{ text }}</p>
    <p :class="['string__simple-cell link',  link == '' && 'blue']">{{ link }}</p>
    <!--<div v-if="change" class="string__content">
      <p class="string__text">{{ text }}</p>
    </div>
    <div v-else  class="string__content">
      <input :value="text" class="string__input"/>
    </div>
    <div v-if="change" class="string__content">
      <p class="string__text">{{ link }}</p>
    </div>
    <div v-else  class="string__content">
      <button class="string__input">Загрузить</button>
    </div>
    <button v-if="type=='string'" @click="changeBlok" :class="['block__button', !change && 'block__button_type_save']">{{ change ? 'Изменить' : 'Сохранить' }}</button>-->
    <PopupMiniVue :active="bool" :func="activePopup"></PopupMiniVue>
  </div>
</template>
  
  <script>

import PopupMiniVue from '@/components/popup/PopupMini.vue'

  export default {
    name: 'PersonalStringVue',
    components: {
      PopupMiniVue,
    },
    props: {
      ordinal: Number,
      date: String,
      text: Number,
      link: String,
      purpose: Number,
      type: {
        type: String,
        default: 'string'
      },
    },
    data() {
      let change = true;
      let bool = false;
      return {
        change, bool
      }
    },
    methods: {
      changeBlok() {
        this.change = !this.change;
      },

      activePopup() {
        console.log('ddd')
        this.bool = !this.bool;
      },
    },
  }
  </script>
  
  <style scoped>
  .string {
    display: flex;
    font-size: 15px;
    line-height: 18px;
    height: 35px;
    border: 1px solid black;
    border-top: 0;
    margin: auto;
    position: relative;
  }

  .string__content {
    display: flex;
    align-items: center;
    height: 30px;
  }

  .string__text-title {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    width: 90px;
    padding: 5px;
    height: 20px;
    font-size: 15px;
    line-height: 18px;
  }

  .string__simple-cell{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 120px;
    height: calc(100% - 10px);
    background-color: white;
    padding: 5px;
    font-size: 15px;
    line-height: 18px;
    border-right: 1px solid black;
  }

  .string__simple-cell:last-of-type {
    border-right: 0 solid black;
  }

  .date {
    width: 125px;
  }

  .step {
    width: 160px;
    cursor: pointer;
  }

  .link {
    width: 160px;
  }

  .red {
    background-color: rgba(244, 130, 42, .2);
  }

  .blue {
    background-color: rgba(142, 234, 252, .2);
  }

  .string__text {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 400px;
    background-color: white;
    outline: 1px solid white;
    padding: 5px;
    height: 20px;
    text-align: left;
    font-size: 15px;
    line-height: 18px;
  }

  .string__input {
    width: 400px;
    background-color: white;
    border: 0;
    outline: 1px solid black;
    padding: 5px;
    height: 20px;
    font-size: 15px;
    line-height: 18px;
    text-decoration: none;
  }

  .string__input:focus {
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

    transition-property: background-color;
    transition-duration: 1s;
  }

  .block__button:hover {
    opacity: 0.9;
  }

  .block__button_type_save {
    background-color: #FF9C00;
  }
  </style>
  