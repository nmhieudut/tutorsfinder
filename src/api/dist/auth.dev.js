"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function login(username, password) {
  var userConfig = {
    username: username,
    password: password
  };
  return new Promise(function (resolve, reject) {
    _axios["default"].post("http://14.245.65.138:9090/api/auth/v1/admin/login", userConfig).then(function (res) {
      localStorage.setItem("token", JSON.stringify(res.data.authToken));
      resolve(res);
    })["catch"](function (err) {
      console.log(err);
      reject(err);
    });
  });
}

var _default = {
  login: login
};
exports["default"] = _default;