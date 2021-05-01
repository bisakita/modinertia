// require('./bootstrap');

// import { InertiaApp } from '@inertiajs/inertia-vue'
// import Vue from 'vue'

// Vue.use(InertiaApp)

// const app = document.getElementById('app')

// new Vue({
//     render: h => h(InertiaApp, {
//         props: {
//             initialPage: JSON.parse(app.dataset.page),
//             resolveComponent: name => require(`./Pages/${name}`).default,
//         },
//     }),
// }).$mount(app)

import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import Router from 'vue-router';

import DashboardPlugin from './plugins/dashboard-plugin';
import router from './routes/starterRouter';
// import App from './App.vue';

import i18n from './i18n';
// import router from './routes/router';
Vue.use(DashboardPlugin);

Vue.use(plugin)
Vue.use(Router)
// Vue.prototype.$route = 'route'

const el = document.getElementById('app')

new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      // resolveComponent: name => require(`./Pages/${name}`).default,
      resolveComponent: (component) => {
        let parts = component.split('/')
        let type = parts[0]
        let module_name = parts[1]
        if (type == 'Module') {
          let name = parts[2]
          return import(`~/${module_name}/Resources/assets/js/Pages/${name}.vue`).then(module => module.default)
        }
        if (type == 'Package') {
          let package_name = parts[2]
          let name = parts[3]
          return import(`../../vendor/${module_name}/${package_name}/resources/js/Pages/${name}.vue`).then(module => module.default)
        }
        let name = parts[2]
        return import(`@/Pages/${module_name}/${name}`).then(module => module.default)
      }
    },
  }),
  router,
  i18n
}).$mount(el)