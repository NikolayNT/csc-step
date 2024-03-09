<template>
  <div class="achievement">
    <img :src="achieveObj.img" alt="Фотография" class="achievement__img">
    <div class="achievement__block">
      <p class="block__text-title">{{ achieveObj.text }}</p>
      <p class="block__text">{{ achieveObj.description }}</p>
    </div>
  </div>
</template>
  
  <script>

  export default {
    name: 'AchievementVue',
    props: {
      achieve: Object,
    },
    data(){
      const achieveObj = this.achieve;
      console.log(this.achieve);
      return {
        achieveObj
      }
    }
  }
  </script>
  
  <style scoped>
  .achievement {
    display: flex;
    margin-bottom: 20px;
  }

  .achievement__img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  .block__text-title {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    min-width: 90px;
    padding: 10px;
    height: 20px;
    font-size: 17px;
    line-height: 20px;
    font-weight: bold;
  }

  .block__text {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    min-width: 90px;
    border-radius: 30px;
    padding: 10px;
    height: 20px;
    text-align: center;
    font-size: 15px;
    line-height: 18px;
  }

  .achievement__block {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  </style>
  