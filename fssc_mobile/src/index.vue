<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import AuiTabBar from "./lib/aui-tabBar/aui-tabBar.vue";
import AuiCell from "./lib/aui-cell/aui-cell.vue";
import AuiList from "./lib/aui-list/aui-list.vue";
import AuiButton from "./lib/aui-button/aui-button.vue";
import AuiBtnGroup from "./lib/aui-btnGroup/aui-btnGroup.vue";
Vue.component("aui-tabBar", AuiTabBar);
Vue.component("aui-cell", AuiCell);
Vue.component("aui-list", AuiList);
Vue.component("aui-button", AuiButton);
Vue.component("aui-btnGroup", AuiBtnGroup);

export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
