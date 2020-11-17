import {add,mul} from './utils.js'

console.log(
    add(1,2),
    mul(3,4)
)

require('./css/normalize.css')
require('./less/normalize.less')

document.write('Hello webpack')

const x = 1;
const y = 2;

import Vue from 'vue'
import App from './components/App.vue'


new Vue({
    el:'#app',
    template:`<App/>`,
    components:{
        App
    }
})