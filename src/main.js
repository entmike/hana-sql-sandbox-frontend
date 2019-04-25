import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueCodemirror from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'

Vue.config.productionTip = false

Vue.use(VueCodemirror, { 
  options: { 
    tabSize: 4,
    styleActiveLine: true,
    lineNumbers: true,
    line: true,
    mode: 'text/x-mysql',
    // theme: 'solarized light'
    theme: 'base16-dark'
  },
  events: ['scroll']
})

new Vue({
  render: h => h(App),
}).$mount('#app')

