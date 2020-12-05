import axios from "axios";

function login(username, password) {
  const userConfig = {
    username: username,
    password: password,
  };
  return new Promise((resolve, reject) => {
    axios
      .post("http://14.245.65.138:9090/api/auth/v1/admin/login", userConfig)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.authToken));
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
export default {
  login,
};
