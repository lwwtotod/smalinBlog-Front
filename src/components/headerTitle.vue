<template>
    <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
            <span class = "textLogo">Smalin</span>
            <Button style = "float: right;margin-top: 15px;" type="primary" shape="circle" icon="person"
            @click="modal1 = true">Sign up</Button>
            <Button style = "float: right;margin-top: 15px;margin-right: 15px;" type="primary" shape="circle" icon="person"
            @click="editArticle">Edit</Button>
        </Header>
    <Modal style = "margin-top: 10%;"
        v-model="modal1"
        title="sign Up"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class = "userPass">
          <span>用户名：</span><Input v-model="userName" placeholder="Enter userName..." style="width: 300px"></Input>
          </div>
        <div class = "userPass">
          <span>密&nbsp;&nbsp;&nbsp;码：</span>
          <Input v-model="passWord" type = "password" placeholder="Enter passWord..." style="width: 300px"></Input>
          </div>
    </Modal>
    </Layout>

</template>

<script>
import * as TYPES from "../vuex/mutation-types.js";
import { mapActions } from "vuex";
export default {
  name: "headerTitle",
  component: {},
  data() {
    return {
      map: null,
      latLng: null,
      modal1: false,
      userName: null,
      passWord: null
    };
  },
  watch: {
  },
  methods: {
    ...mapActions({
      changeeditArticle: TYPES.changeeditArticle,
    }),
    ok() {
      client.invoke("signUp", [this.userName, this.passWord], res => {
        this.$Message.info(res);
      });
      this.userName = null;
      this.passWord = null;
    },
    cancel() {
      this.$Message.info("取消登录！");
      this.userName = null;
      this.passWord = null;
    },
    editArticle(){
      this.changeeditArticle(true);
    }
  },
  mounted() {
  }
};
</script>

<style>
#main {
  position: absolute;
  text-align: center;
  top: 30%;
  left: 30%;
  width: 320px;
  margin-left: -160px;
  margin-top: -160px;
  font-size: 16px;
}
.mainStyle {
  width: 38rem;
  margin-top: 15%;
  margin-bottom: 15%;
}
.mainStyle p {
  width: 80rem;
  font-size: 4rem;
  font-weight: 700;
  line-height: 3.5rem;
  font-family: "roboto", monospace;
  width: 100%;
  height: auto;
}

.textLogo {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 36px;
}
.headButton {
  width: 600px;
}
.headButton Button {
  margin: 5px;
}
.userPass {
  margin: 25px;
}
</style>