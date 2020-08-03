"use strict";

exports.__esModule = true;
exports["default"] = _callee;

require("babel-polyfill");

var _postcss = _interopRequireDefault(require("postcss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _callee(source, plugins) {
  var content, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(!source || !source[0])) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", '');

        case 2:
          content = source[0].content;

          if (plugins) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", content);

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap((0, _postcss["default"])(plugins).process(content));

        case 9:
          result = _context.sent;
          return _context.abrupt("return", result.css);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}