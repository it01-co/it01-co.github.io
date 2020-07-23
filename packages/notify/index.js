import Vue from 'vue';
import VanNotify from './Notify';
import { isObj, isServer } from '../utils';

let timer;
let instance;

const initInstance = () => {
  instance = new (Vue.extend(VanNotify))({
    el: document.createElement('div')
  });

  document.body.appendChild(instance.$el);
};

const parseOptions = message => (isObj(message) ? message : { message });

const Notify = options => {
  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = {
    ...Notify.currentOptions,
    ...parseOptions(options)
  };

  Object.assign(instance, options);
  clearTimeout(timer);

  if (options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
};

Notify.clear = () => {
  if (instance) {
    instance.value = false;
  }
};

Notify.defaultOptions = {
  value: true,
  text: '',
  color: '#fff',
  background: '#f44',
  duration: 3000
};

Notify.setDefaultOptions = options => {
  Object.assign(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = { ...Notify.defaultOptions };
};

Notify.install = () => {
  Vue.use(VanNotify);
};

Notify.resetDefaultOptions();

Vue.prototype.$notify = Notify;

export default Notify;
