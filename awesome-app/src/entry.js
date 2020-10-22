/*global Vue*/
/* weex initialized here, please do not move this line */
import Vant from 'vant';
import 'vant/lib/index.css';
require('../content/index.less');
Vue.use(Vant);


const component = window["aui-library"];

Vue.component('aui-button', component.AuiButton)
Vue.component('aui-table', component.AuiTable)


const {
    router
} = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
new Vue(Vue.util.extend({
    el: '#root',
    router
}, App));

router.push('/');