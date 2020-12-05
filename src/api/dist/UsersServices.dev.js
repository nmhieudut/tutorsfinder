"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getUsers() {
  var token = JSON.parse(localStorage.getItem("token"));
  return new Promise(function (resolve, reject) {
    _axios["default"].get("http://14.245.65.138:9090/api/edu/v1/user", {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (res) {
      var data = [];
      data.push(res);
      resolve(data);
    })["catch"](function (error) {
      console.log(error);
      reject(error);
    });
  });
}

function getDetailUser(id) {
  var token = JSON.parse(localStorage.getItem("token"));
  return new Promise(function (resolve, reject) {
    _axios["default"].get("http://14.245.65.138:9090/api/edu/v1/user/details/".concat(id), {
      headers: {
        Authorization: "Bearer ".concat(token)
      },
      params: {
        id: id
      }
    }).then(function (res) {
      var data = [];
      data.push(res);
      resolve(data);
    })["catch"](function (error) {
      console.log(error);
      reject(error);
    });
  });
}

function createUser(createdUser) {
  return new Promise(function (resolve, reject) {
    _axios["default"].post("http://14.245.65.138:9090/api/auth/v1/user/register", createdUser).then(function (res) {
      resolve(res);
    })["catch"](function (error) {
      console.log(error);
      reject(error);
    });
  });
}

function updateUser(id, updatedUser) {
  var token = JSON.parse(localStorage.getItem("token"));
  return new Promise(function (resolve, reject) {
    _axios["default"].put("http://14.245.65.138:9090/api/edu/v1/user/update", updatedUser, {
      params: {
        idUser: id
      },
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (res) {
      resolve(res);
    })["catch"](function (error) {
      reject(error);
      console.log(error);
    });
  });
}

function deleteUser(id) {
  var token = JSON.parse(localStorage.getItem("token"));
  return new Promise(function (resolve, reject) {
    _axios["default"]["delete"]("http://14.245.65.138:9090/api/edu/v1/user/delete", {
      params: {
        idUser: id
      },
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (res) {
      resolve(res);
    })["catch"](function (error) {
      console.log(error);
      reject(error);
    });
  });
}

function changeStatus(id, status) {
  var token = JSON.parse(localStorage.getItem("token"));
  return new Promise(function (resolve, reject) {
    _axios["default"].put("http://14.245.65.138:9090/api/edu/v1/user/changestatus", {
      name_status: status
    }, {
      params: {
        id: id
      },
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (res) {
      resolve(res);
    })["catch"](function (error) {
      console.log(error);
      reject(error);
    });
  });
}

var _default = {
  getUsers: getUsers,
  getDetailUser: getDetailUser,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  changeStatus: changeStatus
};
exports["default"] = _default;