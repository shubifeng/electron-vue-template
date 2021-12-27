import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
// 引用element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'
// 日志
import './error'
import './icons'
import '@/styles/index.scss'
import '@/styles/dark-mode.scss'

// 引入 i18n 语言包
import VueI18n from 'vue-i18n'
import loadLanguage from "./i18n"
const languages = loadLanguage()

if (!process.env.IS_WEB) {
  if (!require('../../config').IsUseSysTitle) {
    require('@/styles/custom-title.scss')
  }
}


// 创建 i18n
Vue.use(VueI18n) // 新版本必须要这个，不知道为什么
const i18n = new VueI18n({
  locale: 'zh-CN', // 设置默认语言
  messages: languages, // 设置语言包
});

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false
/* eslint-disable no-new */
const vue = new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')

const ffi = require('ffi-napi');
/**
 * 先定义一个函数, 用来在窗口中显示字符
 * @param {String} text
 * @return {*} none
 */
function showText(text) {
  return new Buffer(text, 'ucs2').toString('binary');
};
// 通过ffi加载user32.dll
const mini32 = new ffi.Library('toupnams', {
  'Toupnam_Fini': // 声明这个dll中的一个函数
      [
        'void', [], // 用json的格式罗列其返回类型和参数类型
      ],
  'Toupnam_Open':
  [

  ]
});
console.log("--------------");

const isOk = mini32.Toupnam_Fini();
console.log("isOk"+isOk);
/*
// 调用user32.dll中的MessageBoxW()函数, 弹出一个对话框
const isOk = myUser32.MessageBoxW(
    0, showText('I am Node.JS!'), showText('Hello, World!'), 1
);
console.log(isOk);
*/
export default vue
