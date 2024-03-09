<template>
  <div class="profile">
    <div class="profile__content">
      <div class="profile__content-one">
        <img :src="personalData.img" alt="Фотография" class="profile__foto">
        <div class="profile__content-one-two">
          <TextInputVue textTitle="ФИО" :text="personalData['full-name']"></TextInputVue>
          <TextInputVue textTitle="Должность" :text="personalData['position']"></TextInputVue>
          <TextInputVue textTitle="Отдел" :text="personalData['department']"></TextInputVue>
        </div>
      </div>
      <div class="profile__content-two">
        <TextInputVue textTitle="E-mail" :text="personalData['E-mail']"></TextInputVue>
        <TextInputVue textTitle="Команда" :text="personalData['team']"></TextInputVue>
        <TextInputVue textTitle="Телеграм" :text="personalData['telegram']"></TextInputVue>
        <TextInputVue textTitle="Цель шагов" :text="personalData['plan-steps']"></TextInputVue>
      </div>
    </div>
    <div class="profile__achievements">
      <h2 class="profile__achievements-title">Достижения</h2>
      <template v-for="item in personalData['achievements']" :key="item['id']" >
        <AchievementVue :achieve="item"></AchievementVue>
      </template>
    </div>
  </div>
</template>

<script>

import { personal } from '@/test-data/testData';

import TextInputVue from '@/components/profile/TextInput.vue';
import AchievementVue from '@/components/profile/Achievement.vue';

export default {
  name: 'ProfileVue',
  components: { TextInputVue, AchievementVue},
  data(){
    const personalData = personal;
    console.log(personalData['achievements']);
    return {
      personalData
    }
    
  }
}
</script>

<style scoped>

.profile {
  margin-top: 40px;
}

.profile__content {

}

.profile__content-one {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
}

.profile__content-one-two {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: auto;
}

.profile__content-two {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 230px;
  margin-top: 50px;
  height: 200px;
}

.profile__foto {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}

.profile__achievements {
  margin-top: 40px;
  margin-left: 80px;
}

</style>