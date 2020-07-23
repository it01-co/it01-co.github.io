import Vue from 'vue';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const proto = Vue.prototype;
const defaultLang = 'zh-CN';
const locale = {
  install() {
    if (proto.$healthLang) {
      return;
    }
    // Vue.util.defineReactive, 这是Vue里面观察者劫持数据的方法，劫持$healthLang，当$healthLang触发setter方法的时候，则会通知到依赖的组件   router示例 https://github.com/vuejs/vue-router/blob/v2.8.1/src/install.js#L27
    Vue.util.defineReactive(proto, '$healthLang', defaultLang);
    Vue.util.defineReactive(proto, '$healthMessages', { [defaultLang]: defaultMessages });
  },

  use(lang, messages) {
    proto.$healthLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$healthMessages, messages);
  }
};

locale.install();

export default locale;
