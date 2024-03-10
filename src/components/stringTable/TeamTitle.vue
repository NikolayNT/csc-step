<template>
  <div class="string">
    <div  class="string__simple-cell">
      <p class="string__date-text">{{ ordinal }}</p>
    </div>
    <div  class="string__date">
      <p class="string__date-text">{{ date }}</p>
      <button @click="dateSortTop" class="string__button string__button_position_top"></button>
      <button @click="dateSortDown" class="string__button"></button>
    </div>
    <div  class="string__name">
      <p class="string__name-text">{{ fullName }}</p>
      <button @click="dateSortTop" class="string__button string__button_position_top"></button>
      <button @click="dateSortDown" class="string__button"></button>
    </div>
    <div  class="string__step">
      <p class="string__step-text">{{ text }}</p>
      <button @click="stepSortTop" class="string__button string__button_position_top"></button>
      <button @click="stepSortDown" class="string__button"></button>
    </div>
    <div  class="string__link">
      <p class="string__link-text">{{ link }}</p>
      <button @click="linkSortTop" class="string__button string__button_position_top"></button>
      <button @click="linkSortDown" class="string__button"></button>
    </div>
  </div>
</template>
  
  <script>

  export default {
    name: 'TeamTitleVue',
    props: {
      ordinal: String,
      date: String,
      fullName: String,
      text: String,
      link: String,
      stepSortTop: Function,
      stepSortDown: Function,
      dateSortTop: Function,
      dateSortDown: Function,
      linkSortTop: Function,
      linkSortDown: Function,
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
  .string {
    display: flex;
    font-size: 15px;
    line-height: 18px;
    height: 35px;
    border: 1px solid black;
    margin: auto;
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
    position: relative;
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
    font-weight: bold;
  }

  .string__button {
    position: absolute;
    bottom: 0;
    margin-bottom: 1px;
    margin-right: 1px;
    right: 0;
    z-index: 1;
    border: 0;
    background: transparent;
    height: 15px;
    width: 30px;
    background-image: url('../../img/button-table/sort-button.png');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: .5;
  }

  .string__button:hover {
    opacity: 1;
    cursor: pointer;
  }

  .string__button_position_top {
    top: 0;
    margin-top: 1px;
    background-image: url('../../img/button-table/sort-button-top.png');
  }

  .string__date {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 125px;
    height: calc(100% - 10px);
    background-color: white;
    padding: 5px;
    font-size: 15px;
    line-height: 18px;
    border-right: 1px solid black;
    font-weight: bold;
  }

  .string__date-text {
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
    font-weight: bold;
  }

  .string__name {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 250px;
    height: calc(100% - 10px);
    background-color: white;
    padding: 5px;
    font-size: 15px;
    line-height: 18px;
    border-right: 1px solid black;
    font-weight: bold;
  }

  .string__name-text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 220px;
    height: calc(100% - 10px);
    background-color: white;
    padding: 5px;
    font-size: 15px;
    line-height: 18px;
    font-weight: bold;
  }

  .string__step {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 160px;
    height: calc(100% - 10px);
    background-color: white;
    padding: 5px;
    font-size: 15px;
    line-height: 18px;
    border-right: 1px solid black;
    font-weight: bold;
  }

  .string__step-text {
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
    font-weight: bold;
  }

  .string__link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 160px;
    height: calc(100% - 10px);
    background-color: white;
    padding: 5px;
    font-size: 15px;
    line-height: 18px;
    font-weight: bold;
  }

  .string__link-text {
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
    font-weight: bold;
  }

  </style>
  