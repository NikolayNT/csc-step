<template>
  <div class="overall">
    <h1>Общие результаты</h1>
  </div>
  <div class="setting">
    <p>Фильтры</p>
    <label for="pet-select">Дата: </label>
    <select name="pets" id="pet-select">
      <template v-for="(item) in dateArray" :key="item">
        <option :value="item">{{ item }}</option>
      </template>
    </select>
    <label for="pet-selects">ФИО: </label>
    <select name="petss" id="pet-selects">
      <template v-for="(item) in fullNameArray" :key="item">
        <option :value="item">{{ item }}</option>
      </template>
    </select>

    <label for="pet-selectsa">Команда: </label>
    <select name="petssa" id="pet-selectsa">
      <template v-for="(item) in teamArray" :key="item">
        <option :value="item">{{ item }}</option>
      </template>
    </select>
    </div>

  <div class="team__table">
      <AllTitle ordinal="№" date="Дата" fullName="ФИО" team="Команда" text="Кол-во шагов" link="Скриншот"></AllTitle>
      <template v-for="(item, index) in allData" :key="item['id']">
        <AllString :ordinal="index + 1" :fullName="item.fullName" :team="item.team" :img="item.img" :date="item.date" :text="item.steps"
          :link="item.screenshot"></AllString>
      </template>
    </div>

    <h2 style="margin: auto;">Статистика</h2>
    <div class="team__table team__table-two">
      <div class="cell">
        <p>Минимум</p>
      </div>
      <div class="cell">
        <p>Максимум</p>
      </div>
      <div class="cell">
        <p>Среднее</p>
      </div>
      <div class="cell">
        <p>Общее</p>
      </div>
      <div class="cell">{{ this.getMin() }}</div>
      <div class="cell">{{ this.getMax() }}</div>
      <div class="cell">{{ this.countMedium() }}</div>
      <div class="cell">{{ this.countAll() }}</div>
    </div>

    <div class="" style="width: 400px;margin: auto;">
      <p>Варианты графиков:</p>
      <ul>
        <li>Для каждой команды команды (свой цвет) - сумма шагов/день</li>
        <li>Сумма шагов команды - шаги/день</li>
      </ul>
    </div>
</template>

<script>

import AllTitle from '@/components/stringTable/AllTitle.vue';
import AllString from '@/components/stringTable/AllString.vue';
import { allData } from '@/test-data/testData';

export default {
  name: 'OverallVue',
  components: {
    AllTitle, AllString
  },
  data() {
    const obj = this.checkMean(allData);
    const dateArray = obj.date;
    const fullNameArray = obj.fullName;
    const teamArray = obj.team;
    return {
      allData, dateArray, fullNameArray, teamArray
    }
  },
  methods: {
    checkMean(array) {
      const dateArray = [];
      const fullNameArray = [];
      const teamArray = [];
      array.forEach((item) => {
        if (!dateArray.includes(item.date))
          dateArray.push(item.date);

        if (!fullNameArray.includes(item.fullName))
          fullNameArray.push(item.fullName);

        if (!teamArray.includes(item.team))
          teamArray.push(item.team);
      })
      return { 'date': dateArray, 'fullName': fullNameArray, 'team': teamArray}
    },
    countAll() {
      let min = 0;
      this.allData.forEach((item) => {
        if (item.steps != '')
          min = min + Number(item.steps);
      })
      return min
    },

    countMedium() {
      let min = 0;
      let count = 0
      this.allData.forEach((item) => {
        if (item.steps != '') {
          min = min + Number(item.steps);
          count = count + 1;
        }

      })
      return Math.floor(min / count)
    },

    getMax() {
      let max = 0;
      this.allData.forEach((item) => {
        if (max < item.steps)
          max = item.steps;
      })
      return max;
    },

    getMin() {

      let min = 100000;

      //let count = 0;
      this.allData.forEach((item) => {
        if (min > item.steps && item.steps !== '') {
          min = item.steps;
          console.log(min)
        }

      })

      return min;
    }
  }
}
</script>

<style scoped>
.team__table {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: auto;
}

.team__table-two {
  justify-content: center
}


.setting {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
}


.cell {
  background-color: white;
  width: 25%;
  height: 50px;
}
</style>