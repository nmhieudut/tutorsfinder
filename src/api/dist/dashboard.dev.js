"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllFeedbacks = function getAllFeedbacks() {
  var token, response;
  return regeneratorRuntime.async(function getAllFeedbacks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = JSON.parse(localStorage.getItem("token"));
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("http://14.245.65.138:9090/api/edu/v1/dashboard", {
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          }));

        case 4:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var _default = {
  getAllFeedbacks: getAllFeedbacks
};
exports["default"] = _default;