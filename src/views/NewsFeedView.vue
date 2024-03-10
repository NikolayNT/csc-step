<template>
  <div class="news">
    <h2>Новостная лента</h2>
    <p>Новость смогут задать заранее определённые сотрудники.</p>
    <div v-html="text" id="newContent">
    </div>
    <!--<QuillEditor :modules="modules" toolbar="full" id="editor"/>-->
    <button @click="save" class="news__button">Сохранить</button>
  </div>
</template>

<script>

/*import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';*/

export default {
  name: 'HomeView',
  components: {
     /*QuillEditor*/
  },
  data() {
    const text = ''
    return {
      text
    }
  },
  methods: {
    save() {
      const editor = document.getElementById('editor')
      this.text = editor.querySelector('.ql-editor').getInnerHTML()
    }
  }
}
</script>

<style scoped>
  .news {
    width: 90%;
    margin: 30px auto 30px;
  }

  .news__button {
    margin: 0;
    margin-top: 10px;
    padding: 10px;
    border: 0;
    border-radius: 30px;
    background-color: rgb(26, 89, 159);
    color: white;
    height: 100%;
    width: 100px;
    cursor: pointer;
  }

  .news__button:hover {
    opacity: .9;
  }
</style>
