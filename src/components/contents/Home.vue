<template>
<div class = "document">
  <!-- <div id = "article" class="page" :contenteditable="isLogin" v-html = "active">
		</div> -->
    <div @click="save">save</div>
</div>
</template>

<script>
import css from '../../libs/sheets-of-paper-a4.css'
// import article from './article'
export default {
  name: 'Home',
  components:{
    // article
  },
  data () {
    return {
        active: `this is smalin `,
        isLogin: false
    }
  },
  methods: {
    save(){
      let content = document.getElementById('article').innerText;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
