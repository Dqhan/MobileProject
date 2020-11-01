require('./index.less')
import Vue from "vue";
import AuiTabBar from "./aui-tabBar/aui-tabBar.vue";
import AuiCell from "./aui-cell/aui-cell.vue";
import AuiList from "./aui-list/aui-list.vue";
import AuiButton from "./aui-button/aui-button.vue";
import AuiBtnGroup from "./aui-btnGroup/aui-btnGroup.vue";
import AuiPanel from "./aui-panel/aui-panel.vue";
import AuiFsscFilter from './aui-fssc-filter/aui-fssc-filter.vue';
Vue.component("aui-tabBar", AuiTabBar);
Vue.component("aui-cell", AuiCell);
Vue.component("aui-list", AuiList);
Vue.component("aui-button", AuiButton);
Vue.component("aui-btnGroup", AuiBtnGroup);
Vue.component("aui-panel", AuiPanel)
Vue.component("aui-fssc-filter", AuiFsscFilter);