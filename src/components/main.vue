<template>
 <div class="main">
    <headerTitle></headerTitle>
      <sideBar></sideBar>
      <Content></Content>
</div>
</template>

<script>
import headerTitle from "./headerTitle";
import sideBar from "./sidebar";
import Content from "./content";
export default {
  name: "Main",
  components: {
    headerTitle,
    sideBar,
    Content
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

<style scoped>
.sider{
  float:left;
}
</style>