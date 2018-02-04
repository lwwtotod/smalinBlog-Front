<template>
     <div class="sidebar" :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
         <div class = "menu">
             <div v-for = "(item,index) in menu" :key = "item.id" @click = "clickMenu(item.id)" :class = "{selectMenu: index == active}"><Icon style = "padding: 5px;" :type="item.type"></Icon>{{ item.name }}</div>
         </div>
    </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      menu: [
        {
          name: "Develop",
          type: "social-nodejs",
          id: "0"
        },
        {
          name: "Map",
          type: "ios-book-outline",
          id: "1"
        },
        {
          name: "Works",
          type: "social-chrome-outline",
          id: "2"
        },
        {
          name: "Experience",
          type: "social-javascript-outline",
          id: "3"
        },
        {
          name: "Mood",
          type: "ios-heart-outline",
          id: "4"
        }
      ],
      isCollapsed: false,
      active: 0
    };
  },
  methods: {
    clickMenu(id) {
      this.active = id;
    }
  },
  mounted() {},
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

<style>
.sidebar {
  position: absolute;
  width: 330px;
  height: calc(100% - 95px);
  margin: 15px;
}
.menu {
  margin-top: 60px;
}
.menu div {
  width: 100%;
  height: 60px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  border-right: 2px solid white;
  background-color: rgb(255, 255, 255);
  transition: background-color 0.5s;
}
.menu div:hover {
  background-color: rgb(243, 243, 243);
  color: rgb(45, 140, 240);
  transition: background-color 0.5s, color 0.3s;
}
.menu div:active {
    border-right: 4px solid rgb(45, 140, 240);
  /* background-color: rgb(243, 243, 243); */
  /* color: rgb(45, 140, 240); */
  transition: border-right 0.1s;
}
.selectMenu {
  color: rgb(45, 140, 240);
  border-right: 2px solid rgb(45, 140, 240) !important;
}
</style>