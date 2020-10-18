/*global Vue*/

import Vant from 'vant';
import 'vant/lib/index.css';

console.log(Vant)

Vue.use(Vant);
/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));

router.push('/');