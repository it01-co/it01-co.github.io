/* eslint-disable no-use-before-define */
import { isDef, isObj } from '.';

/**
 * var aa = { aa:22 }
 * Object.prototype.hasOwnProperty.call(aa,"aa")   // true 用来判断一个属性是定义在对象本身而不是继承自原型链
 */ 
const { hasOwnProperty } = Object.prototype;

function assignKey(to, from, key) {
  const val = from[key];

  if (!isDef(val) || (hasOwnProperty.call(to, key) && !isDef(to[key]))) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val)) {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

export default function assign(to, from) {
  Object.keys(from).forEach(key => {
    assignKey(to, from, key);
  });

  return to;
}
