import { isServer } from '.';

const overflowScrollReg = /scroll|auto/i;
export default {
  // 获取最近的滚动元素
  getScrollEventTarget(element, rootParent = window) {
    let node = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== rootParent) {
      const { overflowY } = this.getComputedStyle(node);
      if (overflowScrollReg.test(overflowY)) {
        if (node.tagName !== 'BODY') {
          return node;
        }
        const { overflowY: htmlOverflowY } = window.getComputedStyle(node.parentNode);
        if (overflowScrollReg.test(htmlOverflowY)) {
          return node;
        }
      }
      node = node.parentNode;
    }
    return rootParent;
  },

  getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },

  setScrollTop(element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },

  // 获取元素顶部到页面顶部的距离
  getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },

  getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },

  getComputedStyle: !isServer && document.defaultView.getComputedStyle.bind(document.defaultView)
};
