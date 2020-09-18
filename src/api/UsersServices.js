import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

function getUsers() {
  console.log(`Bearer ${token}`);
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
        //console.log("Data:", data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getDetailUser(id) {
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
        console.log("Data:", data);
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
  return new Promise((resolve, reject) => {
    axios
      .put(`https://5f4229f8d4b4790016fd7741.mockapi.io/tutors/${id}`)
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
  return new Promise((resolve, reject) => {
    axios
      .delete(`https://5f4229f8d4b4790016fd7741.mockapi.io/tutors/${id}`)
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
};
