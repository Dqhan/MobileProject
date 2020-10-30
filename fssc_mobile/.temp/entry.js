import Vue from 'vue'
import weex from 'weex-vue-render'
require('../content/index.less')

weex.init(Vue);

const {
    router
} = require('./router');
const App = require('@/index.vue');

new Vue(Vue.util.extend({
    el: '#root',
    router
}, App));

router.push('/');