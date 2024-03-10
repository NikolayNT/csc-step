<template>
  <div class="string">
    <p class="string__simple-cell">{{ ordinal }}</p>
    <p :class="['string__simple-cell date']">{{ date }}</p>
    
    <div :class="['name']">
      <p :class="['name-text']">{{ fullName }}</p>
      <img class="img" alt="foto" :src="img">
    </div>
    <p @click="activePopup" :class="['string__simple-cell step']">{{ text }}</p>
    <p :class="['string__simple-cell link',  link == '' && 'blue']">{{ link }}</p>
    <PopupMiniVue :active="bool" :func="activePopup"></PopupMiniVue>
  </div>
</template>
  
  <script>

import PopupMiniVue from '@/components/popup/PopupMini.vue'

  export default {
    name: 'TeamStringVue',
    components: {
      PopupMiniVue,
    },
    props: {
      ordinal: Number,
      date: String,
      fullName: String,
      img: String,
      text: Number,
      link: String,
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
    width: 60px;
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

  .name {
    display: flex;
    align-items: center;
    margin: 0;
    width: 60px;
    height: calc(100% - 10px);
    background-color: white;
    padding: 5px;
    font-size: 15px;
    line-height: 18px;
    border-right: 1px solid black;
    width: 250px;
    position: relative;
  }

  .name-text {
    text-align: left;
    margin: 0;
    margin-left: 25px;
  }

  .img {
    position: absolute;
    left: 5px;
    top: 7px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }

  .link {
    width: 160px;
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

  </style>
  