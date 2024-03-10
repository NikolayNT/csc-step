<template>
  <div :class="['popup', active && 'popup_active' ]">
    <p class="popup__text">Введите кол-во шагов</p>
    <input type="number" class="popup__input" />
    <div class="popup__button-group">
      <button @click="func" class="popup__button">Сохранить</button>
      <button @click="func" class="popup__button">Отмена</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PoupMiniVue',
  props: {
    active: Boolean,
    func: Function,
  }
}

</script>

<style scoped>
.popup {
  position: absolute;
  left: 250px;
  top: 35px;
  z-index: -5;
  visibility: hidden;
  border: 1px solid black;
  width: 200px;
  height: 140px;
  background-color: rgb(220, 237, 250);
  border-radius: 30px;
}

.popup_active {
  z-index: 5;
  visibility: visible;
}

.popup__text {
  width: 90%;
  margin: auto;
  margin-top: 20px;
}

.popup__input {
  width: 90%;
  margin: auto;
  margin-top: 20px;
  border-radius: 30px;
  border: 0;
  font-size: 15px;
  line-height: 18px;
}

.popup__button-group {
  width: 90%;
  margin: auto;
  margin-top: 20px;
}

.popup__button {
  width: 50%;
  margin: 0;
  border: 0;
  background-color: rgb(26, 89, 159);
  color: white;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
}

.popup__button:hover {
  opacity: .8;
}

</style>