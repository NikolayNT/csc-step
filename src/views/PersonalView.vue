<template>
  <div class="personal">
    <h2>Личные результаты</h2>
    <div class="personal__table">
      <PersonalTitleVue ordinal="№" date="Дата" text="Кол-во шагов" link="Скриншот" :stepSortTop="stepSortTop"
        :stepSortDown="stepSortDown" :dateSortTop="dateSortTop" :dateSortDown="dateSortDown" :linkSortTop="linkSortTop"
        :linkSortDown="linkSortDown"></PersonalTitleVue>
      <template v-for="(item, index) in personalData" :key="item['id']">
        <PersonalString :ordinal="index + 1" type="string" :date="item.date" :text="item.steps" :link="item.screenshot"
          :purpose="4500"></PersonalString>
      </template>
    </div>
    <h2>Статистика</h2>
    <div class="personal__table">
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
    <!--<LineChart></LineChart>-->
  </div>
</template>

<script>

import { personalData } from '@/test-data/testData';

import PersonalTitleVue from '@/components/stringTable/PersonalTitle.vue';
import PersonalString from '@/components/stringTable/PersonalString.vue';

//import LineChart from '@/components/chart/LineChart.vue';

export default {
  name: 'PersonalVue',
  components: {
    PersonalTitleVue, PersonalString, /*LineChart*/
  },
  data() {
    return {
      personalData
    }
  },
  methods: {
    stepSortTop() {
      this.personalData.sort((item, itemTwo) => {
        return item.steps - itemTwo.steps
      })
    },
    stepSortDown() {
      this.personalData.sort((item, itemTwo) => {
        return itemTwo.steps - item.steps
      })
    },

    dateSortTop() {
      this.personalData.sort((item, itemTwo) => {
        const dateOne = item.date.split('.');
        const dateTwo = itemTwo.date.split('.');
        let mydateOne = new Date(dateOne[2], dateOne[1], dateOne[0]);
        let mydateTwo = new Date(dateTwo[2], dateTwo[1], dateTwo[0]);
        return mydateOne - mydateTwo
      })
    },
    dateSortDown() {
      this.personalData.sort((item, itemTwo) => {
        const dateOne = item.date.split('.');
        const dateTwo = itemTwo.date.split('.');
        let mydateOne = new Date(dateOne[2], dateOne[1], dateOne[0]);
        let mydateTwo = new Date(dateTwo[2], dateTwo[1], dateTwo[0]);
        return mydateTwo - mydateOne
      })
    },

    linkSortTop() {
      this.personalData.sort((item) => {
        if (item.screenshot.length > 0) {
          return -1
        }
        else {
          return 1
        }
      })
    },
    linkSortDown() {
      this.personalData.sort((item,) => {
        if (item.screenshot.length <= 0) {
          return -1
        }
        else {
          return 1
        }
      })
    },

    countAll() {
      let min = 0;
      this.personalData.forEach((item) => {
        if (item.steps != '')
          min = min + item.steps;
      })
      return min
    },

    countMedium() {
      let min = 0;
      let count = 0
      this.personalData.forEach((item) => {
        if (item.steps != '') {
          min = min + item.steps;
          count = count + 1;
        }

      })
      return Math.floor(min / count)
    },

    getMax() {
      let max = 0;
      this.personalData.forEach((item) => {
        if (max < item.steps)
          max = item.steps;
      })
      return max;
    },

    getMin() {

      let min = 100000;

      //let count = 0;
      this.personalData.forEach((item) => {
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
.personal__table {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: auto;
}

.cell {
  background-color: white;
  width: 25%;
  height: 50px;
}
</style>