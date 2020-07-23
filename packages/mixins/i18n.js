// component mixin
import { get, camelize } from '../utils';

export default {
  computed: {
    $t() {
      const { name } = this.$options;
      const prefix = name ? camelize(name) + '.' : '';

      if (!this.$healthMessages) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('[Health] Locale not correctly registered');
        }
        return () => '';
      }

      const messages = this.$healthMessages[this.$healthLang];
      return (path, ...args) => {
        const message = get(messages, prefix + path) || get(messages, path);
        return typeof message === 'function' ? message(...args) : message;
      };
    }
  }
};
