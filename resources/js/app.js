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

Vue.use(plugin)

const el = document.getElementById('app')

new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => require(`./Pages/${name}`).default,
    },
  }),
}).$mount(el)