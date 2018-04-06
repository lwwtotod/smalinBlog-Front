<template>
    <div v-if = "showComponent" class = "bg" :class = "{changeBg: isShow}">
        <div class = "barButton" :class = "{changeBarButton: !isShow}" @click = "isShowBar">
            <Icon :class = "{changeRotate: !isShow}" style="padding: 5px;font-size:20px;" type="chevron-right"></Icon>
        </div>
        <div class = "rightAlert document" :class = "{changeRightAlert: !isShow}" id = "getText">
          <div class = "topTools">
            <Button type="primary" :disabled = "isDisabled" @click = "isTitle = true">保存</Button>
            <Button type="warning" :disabled = "isDisabled" @click = "clearArticle">清空</Button>
            <Button :type="type" @click = "changeType">格式</Button>
          </div>
            <div id = "page" class = "page active" :class = "{changeActive: changeActive}" :contenteditable="isLogin" v-html = "active">
            </div>
        </div>
        <Modal
        v-model="isTitle"
        title="请输入文章标题"
        @on-ok="ok"
        @on-cancel="cancel">
        <Input v-model="title" placeholder="Enter title..." style="width: 200px"></Input>
    </Modal>
            <div class = "tools" :class = "{changeTools: changeActive && isShow}">
              格式
            </div>
    </div>
</template>

<script>
import * as TYPES from "../../vuex/mutation-types.js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "rightAlert",
  data() {
    return {
      isLogin: true, // true 为可编辑状态
      active: "",
      isShow: false,
      type: "default", // 格式的样式切换
      changeActive: false, // 更改文章的样式
      isDisabled: false, //默认保存按钮为不可点,文章发生变化后方可点击
      isTitle: false, // 保存时显示的图标
      title: "",
      showComponent: true, // 是否显示文章组件,只有map和message组件下,不显示文章组件
      articleType: "",
      switch1: false
    };
  },
  computed: {
    ...mapGetters({
      leftBarState: TYPES.leftBarState,
      getArticleId: TYPES.getArticleId
    })
  },
  watch: {
    $route: function() {
      if (this.$route.name == "Map" || this.$route.name == "Message") {
        this.showComponent = false;
      } else {
        this.showComponent = true;
      }
    },
    getArticleId: function() {
      if (this.isShow == false) {
        this.isShow = true;
      }
      // 请求用户点击的当前文章 throughIdGetArticle
      client.invoke("throughIdGetArticle", [this.getArticleId], res => {
        console.log(res);
        this.active = res[0].content;
      });
    }
  },
  methods: {
    ...mapActions({
      changeleftBarState: TYPES.changeleftBarState
    }),
    // 是否显示侧边栏
    isShowBar() {
      this.isShow = !this.isShow;
    },
    changeType() {
      if (this.type == "primary") {
        this.type = "default";
        this.changeActive = false;
      } else {
        this.type = "primary";
        this.changeActive = true;
      }
    },
    ok() {
      if (this.title == "" || this.title == null) {
        this.$Message.error("标题不能为空");
        return;
      }
      this.saveArticle();
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    saveArticle() {
      let Article = document.getElementById("page").innerHTML;
      let title = this.title;
      if (this.$route.name == "Home") {
        this.articleType = "all";
      } else {
        this.articleType = this.$route.name;
      }
      client.invoke("addArticle", [Article, title, this.articleType], res => {
        if (res == "保存成功!") {
          document.getElementById("page").innerHTML = null;
          this.title = null;
          this.$Message.success(res);
        } else {
          this.$Message.error(res);
        }
      });
    },
    clearArticle() {
      document.getElementById("page").innerHTML = "";
    }
  },
  mounted() {
    // 获取手动选择的文字
    $("#page").mouseup(function(e) {
      var txt;
      var parentOffset = $(this).offset();
      var x = e.pageX - parentOffset.left;
      var y = e.pageY - parentOffset.top;
      txt = window.getSelection();
      if (txt.toString().length > 1) {
        alert(txt);
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
  background-color: none;
  transition: background-color 0.5s, z-index 0.8s;
}
.changeBg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-color: rgba(115, 115, 115, 0.5);
  transition: background-color 0.5s;
}
.rightAlert {
  position: absolute;
  width: 1010px;
  height: 100%;
  top: 0px;
  right: -10px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgb(234, 234, 234);
  transition: right 0.5s;
}
.changeRightAlert {
  position: absolute;
  width: 1010px;
  height: 100%;
  top: 0px;
  right: -1010px;
  overflow-y: scroll;
  background-color: rgb(234, 234, 234);
  transition: right 0.5s;
}
.barButton {
  position: absolute;
  right: 990px;
  width: 25px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  top: 45%;
  line-height: 100px;
  cursor: pointer;
  transform: rotate(0deg);
  transition: right 0.5s, transform 0.5s;
}
.changeBarButton {
  right: -10px;
  transition: right 0.5s, transform 0.5s;
}
.changeRotate {
  transform: rotate(180deg);
  transition: transform 0.5s;
}
.active {
  font-size: 16px;
  float: left;
  margin-left: 100px;
}
.changeActive {
  margin-left: 0px;
}
.topTools {
  position: absolute;
  line-height: 36px;
  margin-left: 5px;
  width: calc(100% - 210px);
}
.tools {
  position: absolute;
  float: left;
  height: 100%;
  width: 205px;
  opacity: 0;
  right: 205px;
  background-color: white;
  /* transition: left .5s, opacity .5s; */
}
.changeTools {
  right: 0px;
  opacity: 1;
  /* left: 0px;
  opacity: 1;
  transition: left .5s, opacity .5s; */
}
</style>
