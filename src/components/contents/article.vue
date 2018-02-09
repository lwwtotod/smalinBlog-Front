<template>
    <div class = "bg" :class = "{changeBg: isShow}">
        <div class = "barButton" :class = "{changeBarButton: !isShow}" @click = "isShowBar">
            <Icon :class = "{changeRotate: !isShow}" style="padding: 5px;font-size:20px;" type="chevron-right"></Icon>
        </div>
        <div class = "rightAlert document" :class = "{changeRightAlert: !isShow}" id = "getText">
            <div class = "page" :contenteditable="isLogin" v-html = "active">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "rightAlert",
  data() {
    return {
      isLogin: true,
      active: "",
      isShow: false
    };
  },
  methods: {
    isShowBar() {
      this.isShow = !this.isShow;
    }
  },
  mounted() {
    let content = document.getElementById("getText").innerHTML;
    //   alert(content)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  position: absolute;
  width: 0%;
  height: 0%;
  top: 0px;
  left: 0px;
  background-color: none;
  transition: background-color 0.5s;
}
.changeBg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
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
.changeRotate{
  transform: rotate(180deg);
  transition: transform 0.5s;
}
</style>
