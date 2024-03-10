<template>
  <div class="team">
    <h1>Результаты команды "Скороходы"</h1>
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



    <div class="team__table">
      <TeamTitle ordinal="№" date="Дата" fullName="ФИО" text="Кол-во шагов" link="Скриншот"></TeamTitle>
      <template v-for="(item, index) in teamData" :key="item['id']">
        <TeamString :ordinal="index + 1" :fullName="item.fullName" :img="item.img" :date="item.date" :text="item.steps"
          :link="item.screenshot"></TeamString>
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

    <div class="team__table team__table-two">
      <p>Варианты графиков:</p>
      <ul>
        <li>Для каждого участника команды (свой цвет) - шаги/день</li>
        <li>Сумма шагов команды - шаги/день</li>
      </ul>
    </div>

  </div>
</template>


<script>

import { teamData } from '@/test-data/testData';
import TeamTitle from '@/components/stringTable/TeamTitle.vue';
import TeamString from '@/components/stringTable/TeamString.vue';

export default {
  name: 'TeamVue',
  components: {
    TeamTitle, TeamString,
  },
  data() {
    const obj = this.checkMean(teamData);
    const dateArray = obj.date;
    const fullNameArray = obj.fullName;

    return {
      teamData, dateArray, fullNameArray
    }
  },
  methods: {
    checkMean(array) {
      const dateArray = [];
      const fullNameArray = [];
      array.forEach((item) => {
        if (!dateArray.includes(item.date))
          dateArray.push(item.date);

        if (!fullNameArray.includes(item.fullName))
          fullNameArray.push(item.fullName);
      })
      return { 'date': dateArray, 'fullName': fullNameArray, }
    },

    countAll() {
      let min = 0;
      this.teamData.forEach((item) => {
        if (item.steps != '')
          min = min + Number(item.steps);
      })
      return min
    },

    countMedium() {
      let min = 0;
      let count = 0
      this.teamData.forEach((item) => {
        if (item.steps != '') {
          min = min + Number(item.steps);
          count = count + 1;
        }

      })
      return Math.floor(min / count)
    },

    getMax() {
      let max = 0;
      this.teamData.forEach((item) => {
        if (max < item.steps)
          max = item.steps;
      })
      return max;
    },

    getMin() {

      let min = 100000;

      //let count = 0;
      this.teamData.forEach((item) => {
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