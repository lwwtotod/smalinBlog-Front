// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
export const client = new hprose.HttpClient("http://localhost:8081/hprose");
window.client = client;
// client.use((name, args, context, next) => {
//   nprogress.start()
//   let result = next(name, args, context)
//   result.then(function(result) {
//       nprogress.done()
//       console.log("接口调用:", '---', name, '----', args, '----', JSON.parse(result))
//   })
//   return result
// })
Vue.use(router);
Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// document.onselectstart = new Function("return false");