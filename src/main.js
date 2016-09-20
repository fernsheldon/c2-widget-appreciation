import Vue from 'vue'
import App from './components/App.vue'
global.jQuery = require('jquery');
var $ = global.jQuery;
var bus = new Vue({});
window.$ = $;


Object.defineProperty(Vue.prototype, '$bus', {
    get(){
        return this.$root.bus;
    }
});


new Vue({
  el: '#app',
  data:{
       bus:bus
     },
  render: h => h(App)
})
