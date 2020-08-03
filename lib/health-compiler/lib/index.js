"use strict";

var _babel = _interopRequireDefault(require("./babel"));

var _inject = _interopRequireDefault(require("./inject"));

var _template = _interopRequireDefault(require("./template"));

var compiler = _interopRequireWildcard(require("vue-template-compiler"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (code, config) {
  if (config === void 0) {
    config = {};
  }

  var component = compiler.parseComponent(code);
  var styles = component.styles,
      template = component.template;
  var script = component.script || {
    content: 'export default {};'
  };
  var js;

  if (template) {
    var render = (0, _template["default"])(template, config.template);
    js = (0, _babel["default"])((0, _inject["default"])(script.content, render), config.babel);
  } else {
    js = (0, _babel["default"])(script.content, config.babel);
  }

  var css = styles && styles[0] ? styles[0].content : '';
  return {
    js: js,
    css: css
  };
};