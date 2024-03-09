<template>
  <router-link :to="path" class="button__link">
    <div class="button__div">
      <img v-if="name=='Профиль'" alt="фото" :src="img" class="button__foto"/>
      <p v-else class="button__text">{{ name }}</p>
    </div>
  </router-link>
</template>
  
  <script>

  export default {
    name: 'ButtonMenu',
    props: {
      path: String,
      name: String,
      img: {
        type: String,
        default: '',
      }
    }
  }
  </script>
  
  <style scoped>

  a.router-link-exact-active {
    background-color: rgb(0, 110, 180);
    color: white;
  }

  .button__link {
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: inline-block;
    color: black;
    background-color: white;
    border-right: 1px solid grey;
  }

  .button__link:last-of-type {
    border-right: none;
  }

  .button__link:hover {
    background-color: rgb(103, 173, 227);
    color: white;
  }

  .button__div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 50px;
    padding: 0 20px;
  }

  .button__text {
    margin: 0;
    padding: 0;
    display: inline-block;
    background: transparent;
  }

  .button__foto {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  </style>
  