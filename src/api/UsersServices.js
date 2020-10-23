import axios from "axios";

function getUsers() {
  const token = JSON.parse(localStorage.getItem("token"));
  return new Promise((resolve, reject) => {
    axios
      .get("http://haimai.ddns.net:9090/api/edu/v1/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = [];
        data.push(res);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getDetailUser(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  return new Promise((resolve, reject) => {
    axios
      .get(`http://haimai.ddns.net:9090/api/edu/v1/user/details/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { id: id },
      })
      .then((res) => {
        const data = [];
        data.push(res);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
function createUser(createdUser) {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "http://haimai.ddns.net:9090/api/auth/v1/user/register",
        createdUser
      )
      .then((res) => {
        resolve(res);
        console.log("Data created:", res);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
function updateUser(id, updatedUser) {
  const token = JSON.parse(localStorage.getItem("token"));
  return new Promise((resolve, reject) => {
    axios
      .put(`http://haimai.ddns.net:9090/api/edu/v1/user/update`, updatedUser, {
        params: { idUser: id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      });
  });
}
function deleteUser(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  return new Promise((resolve, reject) => {
    axios
      .delete(`http://haimai.ddns.net:9090/api/edu/v1/user/delete`, {
        params: { idUser: id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function changeStatus(id, status) {
  const token = JSON.parse(localStorage.getItem("token"));
  return new Promise((resolve, reject) => {
    axios
      .put(
        "https://haimai.ddns.net:9090/api/edu/v1/user/changestatus",
        { name_status: status },
        {
          params: { id: id },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
export default {
  getUsers,
  getDetailUser,
  createUser,
  updateUser,
  deleteUser,
  changeStatus,
};
