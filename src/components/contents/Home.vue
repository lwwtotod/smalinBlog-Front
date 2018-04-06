<template>
    <div class = "articleList">
      <!-- 渲染服务器请求回来的home页的文章列表 -->
        <div v-for = "(item, index) in content" :key = "index" class = "content" @click = "clickArticleList(item.id)">
          <div class = "leftContent">
            <div class = "articleTitle"><h1>{{ item.title }}</h1></div>
            <div v-html = "item.content"></div>
          </div>
          <!-- 右侧图片 -->
            <div class = "photo">
              <img src = "../../assets/nophoto.png" />
            </div>
        </div>  
    </div>
</template>

<script>
import * as TYPES from "../../vuex/mutation-types.js";
import { mapGetters,mapActions } from "vuex";
export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      articleType: "",
      content: ""
    };
  },
  computed: {
    ...mapGetters({
      getArticleId: TYPES.getArticleId
    })
  },
  methods: {
    ...mapActions({
      changegetArticleId: TYPES.changegetArticleId,
    }),
    save() {
      let content = document.getElementById("article").innerText;
    },
    clickArticleList(id){
      if (id == this.getgetArticleId) {
        this.changegetArticleId(-1);
      } else {
        
      }
      this.changegetArticleId(id);
    }
  },
  mounted() {
    // 进度条开始
    this.$Loading.start();
    // 请求默认文章
    if (this.$route.name == "Home") {
      this.articleType = "all";
    } else {
      this.articleType = this.$route.name;
    }
    client.invoke("getArticle", [this.articleType], res => {
      this.content = res;
      // 请求成功，进度条读完
      this.$Loading.finish();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.articleList {
  width: 100%;
  height: 100%;
}
.content {
  width: calc(100% - 20px);
  height: 230px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 10px;
  cursor: pointer;
  transition: border 0.5s;
  float: left;
}
.content:hover {
  border: 1px solid rgb(45, 140, 240);
  transition: border 0.5s;
}
.photo {
  float: left;
}
.photo img {
  width: 210px;
  height: 210px;
}
.articleTitle {
  width: 100%;
  height: 30px;
  overflow: hidden;
}
.time {
  font-size: 14px;
  font-weight: bold;
}
.leftContent {
  width: calc(100% - 220px);
  float: left;
}
</style>
