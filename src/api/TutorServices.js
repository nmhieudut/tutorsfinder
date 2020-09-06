import axios from "axios";

function getTutors() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://5f4229f8d4b4790016fd7741.mockapi.io/tutors")
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

function getDetailTutor(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://5f4229f8d4b4790016fd7741.mockapi.io/tutors/${id}`)
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
function createTutor(createdUser) {
  return new Promise((resolve, reject) => {
    axios
      .post("https://5f4229f8d4b4790016fd7741.mockapi.io/tutors", createdUser)
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
function updateTutor(id) {
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
function deleteTutor(id) {
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
  getTutors,
  getDetailTutor,
  createTutor,
  updateTutor,
  deleteTutor,
};
