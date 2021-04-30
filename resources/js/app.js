require('./bootstrap');

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
import VueRouter from 'vue-router';
import RouterPrefetch from 'vue-router-prefetch'
import DashboardPlugin from './plugins/dashboard-plugin';

Vue.use(plugin)
Vue.use(DashboardPlugin)
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

import router from './routes/router';
import i18n from './i18n';

const el = document.getElementById('app')

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';

Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
}

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
        return import(`@/pages/${module_name}/${name}`).then(module => module.default)
      }
    },
  }),
  router,
  i18n
}).$mount(el)