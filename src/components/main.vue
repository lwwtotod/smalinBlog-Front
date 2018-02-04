<template>
 <div class="main">
    <Header></Header>
    <sidebar></sidebar>
</div>
</template>

<script>
import Header from "./header";
import sidebar from "./sidebar";
export default {
  name: "main",
  components: {
    Header,
    sidebar
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

</style>