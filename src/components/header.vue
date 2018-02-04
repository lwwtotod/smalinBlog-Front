<template>
    <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
            <span class = "textLogo">Smalin blog</span>
            <Button style = "float: right;margin-top: 15px;" type="primary" shape="circle" icon="person"
            @click="modal1 = true">Sign up</Button>
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
import ButtonMain from "./buttonMain";
export default {
  name: "header",
  component: {
    ButtonMain
  },
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
    latLng: function() {
      L.marker(this.latLng)
        .addTo(this.map)
        .bindPopup("你在这!")
        .openPopup();
      this.map.setView(this.latLng, 12);
    }
  },
  methods: {
    ok() {
      client.invoke('signUp', [this.userName, this.passWord], (res) =>{
        
      this.$Message.info(res);
      })
      this.userName = null;
      this.passWord = null;
    },
    cancel() {
      this.$Message.info("取消登录！");
      this.userName = null;
      this.passWord = null;
    }
    // 进入主页 2017/11/13
    // enterMain() {
    //   this.$router.push({ path: "home" });
    // },
    // showPosition(position) {
    //   var lat = position.coords.latitude; //纬度
    //   var lag = position.coords.longitude; //经度
    //   this.latLng = [lat, lag];
    // },
    // showError(error) {
    //   switch (error.code) {
    //     case error.PERMISSION_DENIED:
    //       console.log("定位失败,用户拒绝请求地理定位");
    //       break;
    //     case error.POSITION_UNAVAILABLE:
    //       console.log("定位失败,位置信息是不可用");
    //       break;
    //     case error.TIMEOUT:
    //       console.log("定位失败,请求获取用户位置超时");
    //       break;
    //     case error.UNKNOWN_ERROR:
    //       console.log("定位失败,定位系统失效");
    //       break;
    //   }
    // }
  },
  mounted() {
    //   client.invoke("getName", ["1"], function(name) {
    //     console.log(name);
    //   });
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //       this.showPosition,
    //       this.showError
    //     );
    //   } else {
    //     alert("浏览器不支持地理定位。");
    //   }
    //   this.map = L.map("map", {
    //     center: [39.89945, 116.40769],
    //     zoom: 13
    //   });
    //   L.tileLayer(
    //     `https://api.mapbox.com/styles/v1/smalin0020/cjd587s9c14qk2rvhrgxp3rtd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic21hbGluMDAyMCIsImEiOiJjamQzd2tqNDQwOGF2MndxcmRscm1zOHUwIn0.t4JONh4lXUzCuNcUgg8lJQ`
    //   ).addTo(this.map);
    //   // L.tileLayer("http://t7.tianditu.cn/cva_w/wmts?" +
    //   // "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
    //   // "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}", {
    //   //   attribution:
    //   //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //   // }).addTo(map);
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