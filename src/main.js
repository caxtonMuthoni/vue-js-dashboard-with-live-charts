import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import BarChart from './plugins/barchart';
import LineChart from './plugins/LineChart';
import moment from 'moment'

Vue.config.productionTip = false

// Registering chart components globally
Vue.component('bar-chart', BarChart)
Vue.component('line-chart', LineChart)

/* Global filters */

Vue.filter('formatDate', (date) => {
   return moment(date).format('DD-MMM-YYYY')
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
