// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import Quotes from './components/quotes.vue'
import NewQuote from './components/new-quote.vue'
import Signin from './components/signin.vue'
import Signup from './components/signup.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '', component: Quotes },
  { path: '/new-quote', component: NewQuote },
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
